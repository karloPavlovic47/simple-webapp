const express = require('express');
const { canSendMail, sendMail } = require('../services/mailer');

const router = express.Router();

function formatDisplayDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || '');
  return new Intl.DateTimeFormat('en', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

function diffDays(startValue, endValue) {
  const start = new Date(startValue);
  const end = new Date(endValue);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) return 0;
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function buildCarInquiryMail(reservation, payload) {
  const vehicleLabel = String(payload.vehicleName || reservation.carType || 'Vehicle').trim();
  const pickupDisplay = String(payload.pickupDisplay || '').trim() || formatDisplayDate(reservation.pickup);
  const dropoffDisplay = String(payload.dropoffDisplay || '').trim() || formatDisplayDate(reservation.dropoff);
  const totalDays = Number(payload.days) || diffDays(reservation.pickup, reservation.dropoff);
  const locationLabel = String(payload.locationLabel || reservation.location || 'At office location').trim();
  const totalDisplay = String(payload.totalDisplay || '').trim();
  const perDayDisplay = String(payload.perDayDisplay || '').trim();

  const lines = [
    `Hello ${reservation.name},`,
    '',
    `we have received your inquiry for the ${vehicleLabel} vehicle category.`,
    '',
    `Rental period: ${pickupDisplay} to ${dropoffDisplay} (${totalDays} days).`,
    '',
    `Pickup method: ${locationLabel}.`,
  ];

  if (totalDisplay) {
    const priceLine = perDayDisplay
      ? `Estimated price: ${totalDisplay} (${perDayDisplay} per day).`
      : `Estimated price: ${totalDisplay}.`;
    lines.push('', priceLine);
  }

  if (reservation.deliveryChargesMayApply) {
    lines.push('', 'Delivery may include additional delivery charges.');
  }

  lines.push('', 'We will contact you soon with final confirmation and pickup details.');

  return {
    subject: `Mljet4You rent a car inquiry - ${vehicleLabel}`,
    text: lines.join('\n'),
  };
}

function createCarReservation(payload) {
  const { name, email, pickup, dropoff, carType, location } = payload || {};
  if (!name || !email || !pickup || !dropoff) {
    return { ok: false, code: 400, body: { success: false, message: 'Missing required fields' } };
  }

  const start = new Date(pickup);
  const end = new Date(dropoff);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return { ok: false, code: 400, body: { success: false, message: 'Invalid dates' } };
  }

  const reservation = {
    id: 'CAR-' + Date.now(),
    name,
    email,
    pickup,
    dropoff,
    carType: carType || 'compact',
    location: location || 'At office location',
    confirmationEmailSent: false,
    deliveryChargesMayApply: location === 'Delivery',
    createdAt: new Date().toISOString(),
  };

  return {
    ok: true,
    code: 200,
    reservation,
  };
}

router.get('/rentacar/bookings', (req, res) => {
  res.json({ bookings: [] });
});

router.post('/rentacar/book', async (req, res) => {
  const result = createCarReservation(req.body);
  if (!result.ok) {
    return res.status(result.code).json(result.body);
  }

  const { reservation } = result;
  let mailSent = false;
  let mailError = null;

  if (canSendMail()) {
    try {
      const mail = buildCarInquiryMail(reservation, req.body || {});
      await sendMail({
        subject: mail.subject,
        replyTo: reservation.email,
        text: mail.text,
      });
      mailSent = true;
      reservation.confirmationEmailSent = true;
    } catch (error) {
      mailError = error.message;
    }
  } else {
    mailError = 'Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.';
  }

  return res.status(200).json({
    success: true,
    reservation,
    message: mailSent ? 'Inquiry received and confirmation email sent' : 'Inquiry received',
    mailSent,
    mailError,
  });
});

// Backwards-compatible endpoint
router.post('/rent-car', async (req, res) => {
  const result = createCarReservation(req.body);
  if (!result.ok) {
    return res.status(result.code).json(result.body);
  }

  const { reservation } = result;
  let mailSent = false;
  let mailError = null;

  if (canSendMail()) {
    try {
      const mail = buildCarInquiryMail(reservation, req.body || {});
      await sendMail({
        subject: mail.subject,
        replyTo: reservation.email,
        text: mail.text,
      });
      mailSent = true;
      reservation.confirmationEmailSent = true;
    } catch (error) {
      mailError = error.message;
    }
  } else {
    mailError = 'Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.';
  }

  return res.status(200).json({
    success: true,
    reservation,
    message: mailSent ? 'Inquiry received and confirmation email sent' : 'Inquiry received',
    mailSent,
    mailError,
  });
});

module.exports = router;
