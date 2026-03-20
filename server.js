const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Ensure data dir and bookings file exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(BOOKINGS_FILE)) fs.writeFileSync(BOOKINGS_FILE, JSON.stringify({}, null, 2));

function normalizeStorage(rawData) {
  // Backwards compatibility: if old shape is {"apt-1": [...]} treat it as apartment storage.
  if (!rawData || typeof rawData !== 'object' || Array.isArray(rawData)) {
    return { apartments: {}, cars: [], guestCheckins: [] };
  }

  if (!('apartments' in rawData) && !('cars' in rawData) && !('guestCheckins' in rawData)) {
    return { apartments: rawData, cars: [], guestCheckins: [] };
  }

  return {
    apartments: rawData.apartments && typeof rawData.apartments === 'object' ? rawData.apartments : {},
    cars: Array.isArray(rawData.cars) ? rawData.cars : [],
    guestCheckins: Array.isArray(rawData.guestCheckins) ? rawData.guestCheckins : [],
  };
}

function readStorage() {
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, 'utf8');
    return normalizeStorage(JSON.parse(raw || '{}'));
  } catch (err) {
    return { apartments: {}, cars: [], guestCheckins: [] };
  }
}

function writeStorage(data) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(data, null, 2));
}

// Static list of apartments (7 placeholder examples)
const APARTMENTS = [
  {
    id: 'apt-1',
    name: 'Adriatic View Studio',
    imageUrl: 'https://picsum.photos/seed/apt1/800/560',
    city: 'Split',
    type: 'studio',
    pricePerNight: 78,
    rating: 9.1,
    reviewCount: 214,
    distanceKm: 0.4,
    imageLabel: 'Pogled na more',
    perks: ['Besplatan Wi-Fi', 'Klima uredaj', 'Privatni balkon'],
    description: 'Moderan studio u centru Splita, 5 minuta hoda od rive.',
  },
  {
    id: 'apt-2',
    name: 'Old Town Comfort Flat',
    imageUrl: 'https://picsum.photos/seed/apt2/800/560',
    city: 'Dubrovnik',
    type: 'one-bedroom',
    pricePerNight: 112,
    rating: 8.8,
    reviewCount: 172,
    distanceKm: 0.2,
    imageLabel: 'Stari grad panorama',
    perks: ['Transfer iz zracne luke', 'Kuhinja', 'Self check-in'],
    description: 'Udoban jednosobni apartman unutar zidina starog grada.',
  },
  {
    id: 'apt-3',
    name: 'Istria Family Residence',
    imageUrl: 'https://picsum.photos/seed/apt3/800/560',
    city: 'Pula',
    type: 'family',
    pricePerNight: 139,
    rating: 9.4,
    reviewCount: 98,
    distanceKm: 1.1,
    imageLabel: 'Vrt i terasa',
    perks: ['2 spavace sobe', 'Besplatan parking', 'Perilica rublja'],
    description: 'Prostran obiteljski apartman s vrtom, idealan za duzi boravak.',
  },
  {
    id: 'apt-4',
    name: 'Zagreb Downtown Loft',
    imageUrl: 'https://picsum.photos/seed/apt4/800/560',
    city: 'Zagreb',
    type: 'one-bedroom',
    pricePerNight: 96,
    rating: 8.9,
    reviewCount: 147,
    distanceKm: 0.6,
    imageLabel: 'Pogled na gradske krovove',
    perks: ['Brzi Wi-Fi', 'Radni stol', 'Self check-in'],
    description: 'Svijetao loft u centru Zagreba, blizu glavnih atrakcija i tramvaja.',
  },
  {
    id: 'apt-5',
    name: 'Makarska Beach Suite',
    imageUrl: 'https://picsum.photos/seed/apt5/800/560',
    city: 'Makarska',
    type: 'studio',
    pricePerNight: 88,
    rating: 9.2,
    reviewCount: 121,
    distanceKm: 0.3,
    imageLabel: 'Terasa uz more',
    perks: ['Balkon', 'Mini kuhinja', 'Klima uredaj'],
    description: 'Ugodan studio korak od plaze, odlican za parove.',
  },
  {
    id: 'apt-6',
    name: 'Zadar Harbor Apartment',
    imageUrl: 'https://picsum.photos/seed/apt6/800/560',
    city: 'Zadar',
    type: 'one-bedroom',
    pricePerNight: 104,
    rating: 8.7,
    reviewCount: 89,
    distanceKm: 0.5,
    imageLabel: 'Pogled na luku',
    perks: ['Besplatan parking', 'Perilica rublja', 'Kasni check-in'],
    description: 'Moderan apartman u blizini rive i Morskih orgulja.',
  },
  {
    id: 'apt-7',
    name: 'Rovinj Garden Residence',
    imageUrl: 'https://picsum.photos/seed/apt7/800/560',
    city: 'Rovinj',
    type: 'family',
    pricePerNight: 148,
    rating: 9.5,
    reviewCount: 76,
    distanceKm: 1.0,
    imageLabel: 'Zeleni vrt i terasa',
    perks: ['2 kupaonice', 'Velika kuhinja', 'Privatno dvoriste'],
    description: 'Prostran obiteljski smjestaj s mirnom okolinom i privatnim vrtom.',
  },
];

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Apartments endpoints
app.get('/api/apartments', (req, res) => {
  res.json({ apartments: APARTMENTS });
});

app.get('/api/apartments/:id/bookings', (req, res) => {
  const id = req.params.id;
  const storage = readStorage();
  res.json({ bookings: storage.apartments[id] || [] });
});

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

app.get('/api/apartments/occupancy-preview', (req, res) => {
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
  res.json({
    success: true,
    from: String(checkin),
    to: String(checkout),
    total: preview.length,
    available: availableCount,
    preview,
  });
});

// Create a booking (register occupancy)
app.post('/api/apartments/:id/book', (req, res) => {
  const id = req.params.id;
  const { name, email, checkin, checkout, guests, evisitor } = req.body || {};
  if (!name || !email || !checkin || !checkout) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Basic date validation
  const start = new Date(checkin);
  const end = new Date(checkout);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return res.status(400).json({ success: false, message: 'Invalid dates' });
  }

  const storage = readStorage();
  storage.apartments[id] = storage.apartments[id] || [];

  // Check overlap
  const overlap = storage.apartments[id].some(b => {
    const bStart = new Date(b.checkin);
    const bEnd = new Date(b.checkout);
    return (start < bEnd) && (end > bStart);
  });
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
  res.json({ success: true, booking });
});

// Keep convenience endpoint and enrich it with eVisitor/email confirmation simulation
app.post('/api/reserve-apartment', (req, res) => {
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

  res.json({ success: true, confirmation });
});

app.get('/api/rentacar/bookings', (req, res) => {
  const storage = readStorage();
  res.json({ bookings: storage.cars });
});

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

  const storage = readStorage();
  const overlap = storage.cars.some((b) => {
    if (b.carType !== (carType || 'compact') || b.location !== (location || 'Zagreb')) return false;
    const bStart = new Date(b.pickup);
    const bEnd = new Date(b.dropoff);
    return start < bEnd && end > bStart;
  });

  if (overlap) {
    return {
      ok: false,
      code: 409,
      body: {
        success: false,
        message: 'Selected vehicle type is unavailable for those dates at this location',
      },
    };
  }

  const reservation = {
    id: 'CAR-' + Date.now(),
    name,
    email,
    pickup,
    dropoff,
    carType: carType || 'compact',
    location: location || 'Zagreb',
    confirmationEmailSent: true,
    createdAt: new Date().toISOString(),
  };

  storage.cars.push(reservation);
  writeStorage(storage);
  return { ok: true, code: 200, body: { success: true, reservation } };
}

app.post('/api/rentacar/book', (req, res) => {
  const result = createCarReservation(req.body);
  res.status(result.code).json(result.body);
});

// Backwards-compatible endpoint
app.post('/api/rent-car', (req, res) => {
  const result = createCarReservation(req.body);
  res.status(result.code).json(result.body);
});

app.post('/api/guest/checkin', (req, res) => {
  const { bookingId, guestName, email, passportId, arrivalDate, evisitor } = req.body || {};
  if (!bookingId || !guestName || !email || !passportId || !arrivalDate) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const arrival = new Date(arrivalDate);
  if (isNaN(arrival.getTime())) {
    return res.status(400).json({ success: false, message: 'Invalid arrival date' });
  }

  const storage = readStorage();
  const checkin = {
    id: 'CHK-' + Date.now(),
    bookingId,
    guestName,
    email,
    passportId,
    arrivalDate,
    evisitorRegistered: Boolean(evisitor),
    confirmationEmailSent: true,
    createdAt: new Date().toISOString(),
  };

  storage.guestCheckins.push(checkin);
  writeStorage(storage);

  res.json({
    success: true,
    message: 'Online check-in completed',
    checkin,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
