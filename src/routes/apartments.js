const express = require('express');
const APARTMENTS = require('../data/apartments');
const { readStorage, writeStorage } = require('../services/storage');
const { canSendMail, sendMail } = require('../services/mailer');

const router = express.Router();

function bookingDatesOverlap(booking, start, end) {
  const bStart = new Date(booking.checkin);
  const bEnd = new Date(booking.checkout);
  return start < bEnd && end > bStart;
}

function apartmentIsAvailable(storage, apartmentId, start, end) {
  const bookings = storage.apartments[apartmentId] || [];
  return !bookings.some((booking) => bookingDatesOverlap(booking, start, end));
}

function normalizeApartmentSelection(value) {
  const selected = String(value || '').trim();
  if (!selected) return { mode: 'any' };

  const directApartment = APARTMENTS.find((apt) => apt.id === selected);
  if (directApartment) return { mode: 'id', apartmentId: directApartment.id };

  return { mode: 'type', apartmentType: selected.toLowerCase() };
}

function pickApartmentForReservation(storage, selection, start, end) {
  let candidates = APARTMENTS;

  if (selection.mode === 'id') {
    candidates = APARTMENTS.filter((apt) => apt.id === selection.apartmentId);
  } else if (selection.mode === 'type') {
    candidates = APARTMENTS.filter((apt) => String(apt.type || '').toLowerCase() === selection.apartmentType);
  }

  return candidates
    .filter((apt) => apartmentIsAvailable(storage, apt.id, start, end))
    .sort((a, b) => a.pricePerNight - b.pricePerNight)[0] || null;
}

router.get('/apartments', (req, res) => {
  res.json({ apartments: APARTMENTS });
});

router.get('/apartments/:id/bookings', (req, res) => {
  const id = req.params.id;
  const storage = readStorage();
  res.json({ bookings: storage.apartments[id] || [] });
});

router.get('/apartments/occupancy-preview', (req, res) => {
  const { checkin, checkout, apartment, city } = req.query || {};

  const start = new Date(String(checkin || ''));
  const end = new Date(String(checkout || ''));
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return res.status(400).json({ success: false, message: 'Invalid dates' });
  }

  const selection = normalizeApartmentSelection(apartment);
  const cityFilter = String(city || '').trim().toLowerCase();
  const storage = readStorage();

  let candidates = APARTMENTS;
  if (selection.mode === 'id') {
    candidates = candidates.filter((apt) => apt.id === selection.apartmentId);
  } else if (selection.mode === 'type') {
    candidates = candidates.filter((apt) => String(apt.type || '').toLowerCase() === selection.apartmentType);
  }
  if (cityFilter) {
    candidates = candidates.filter((apt) => String(apt.city || '').toLowerCase().includes(cityFilter));
  }

  const preview = candidates.map((apt) => {
    const bookings = storage.apartments[apt.id] || [];
    const overlapping = bookings.filter((booking) => bookingDatesOverlap(booking, start, end)).length;
    return {
      id: apt.id,
      name: apt.name,
      city: apt.city,
      type: apt.type,
      pricePerNight: apt.pricePerNight,
      available: overlapping === 0,
      overlappingBookings: overlapping,
    };
  });

  const availableCount = preview.filter((item) => item.available).length;
  return res.json({
    success: true,
    from: String(checkin),
    to: String(checkout),
    total: preview.length,
    available: availableCount,
    preview,
  });
});

router.get('/apartments/:id', (req, res) => {
  const id = req.params.id;
  const apartment = APARTMENTS.find((apt) => apt.id === id);
  if (!apartment) {
    return res.status(404).json({ success: false, message: 'Apartment not found' });
  }

  const storage = readStorage();
  return res.json({
    success: true,
    apartment,
    bookings: storage.apartments[id] || [],
  });
});

router.post('/apartments/:id/book', async (req, res) => {
  const id = req.params.id;
  const { name, email, checkin, checkout, guests, evisitor } = req.body || {};
  if (!name || !email || !checkin || !checkout) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const start = new Date(checkin);
  const end = new Date(checkout);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return res.status(400).json({ success: false, message: 'Invalid dates' });
  }

  const storage = readStorage();
  storage.apartments[id] = storage.apartments[id] || [];

  const overlap = storage.apartments[id].some((booking) => bookingDatesOverlap(booking, start, end));
  if (overlap) return res.status(409).json({ success: false, message: 'Dates unavailable' });

  const booking = {
    id: 'BKG-' + Date.now(),
    name,
    email,
    checkin,
    checkout,
    guests: guests || 1,
    evisitor: Boolean(evisitor),
    emailConfirmation: true,
    createdAt: new Date().toISOString(),
  };
  storage.apartments[id].push(booking);
  writeStorage(storage);

  let mailSent = false;
  let mailError = null;

  if (canSendMail()) {
    try {
      await sendMail({
        subject: `Mljet4You apartment booking ${booking.id}`,
        replyTo: email,
        text: [
          'New apartment booking received.',
          `Booking ID: ${booking.id}`,
          `Apartment ID: ${id}`,
          `Guest: ${name}`,
          `Email: ${email}`,
          `Dates: ${checkin} -> ${checkout}`,
          `Guests: ${booking.guests}`,
          `eVisitor: ${booking.evisitor ? 'Yes' : 'No'}`,
        ].join('\n'),
      });
      mailSent = true;
    } catch (error) {
      mailError = error.message;
    }
  } else {
    mailError = 'Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.';
  }

  return res.json({ success: true, booking, mailSent, mailError });
});

router.post('/reserve-apartment', async (req, res) => {
  const { name, email, checkin, checkout, guests, apartment, evisitor } = req.body || {};
  if (!name || !email || !checkin || !checkout) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const start = new Date(checkin);
  const end = new Date(checkout);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return res.status(400).json({ success: false, message: 'Invalid dates' });
  }

  const storage = readStorage();
  const selection = normalizeApartmentSelection(apartment);
  const picked = pickApartmentForReservation(storage, selection, start, end);
  if (!picked) {
    return res.status(409).json({ success: false, message: 'No available apartment for selected criteria' });
  }

  storage.apartments[picked.id] = storage.apartments[picked.id] || [];

  const confirmation = {
    id: 'APT-' + Date.now(),
    apartmentId: picked.id,
    apartmentName: picked.name,
    apartmentType: picked.type,
    name,
    email,
    checkin,
    checkout,
    guests: Number(guests) || 1,
    evisitorRegistered: Boolean(evisitor),
    confirmationEmailSent: true,
    createdAt: new Date().toISOString(),
  };

  storage.apartments[picked.id].push(confirmation);
  writeStorage(storage);

  let mailSent = false;
  let mailError = null;

  if (canSendMail()) {
    try {
      await sendMail({
        subject: `Mljet4You reservation ${confirmation.id}`,
        replyTo: email,
        text: [
          'New reserve-apartment request received.',
          `Confirmation ID: ${confirmation.id}`,
          `Apartment ID: ${confirmation.apartmentId}`,
          `Apartment: ${confirmation.apartmentName}`,
          `Type: ${confirmation.apartmentType}`,
          `Guest: ${name}`,
          `Email: ${email}`,
          `Dates: ${checkin} -> ${checkout}`,
          `Guests: ${confirmation.guests}`,
          `eVisitor: ${confirmation.evisitorRegistered ? 'Yes' : 'No'}`,
        ].join('\n'),
      });
      mailSent = true;
    } catch (error) {
      mailError = error.message;
    }
  } else {
    mailError = 'Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.';
  }

  return res.json({ success: true, confirmation, mailSent, mailError });
});

module.exports = router;
