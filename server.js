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

// Static list of apartments (4 examples)
const APARTMENTS = [
  { id: 'apt-1', name: 'Seaside Studio, Split', city: 'Split', type: 'studio', pricePerNight: 55 },
  { id: 'apt-2', name: 'Old Town Flat, Dubrovnik', city: 'Dubrovnik', type: 'one-bedroom', pricePerNight: 85 },
  { id: 'apt-3', name: 'Istria Family House', city: 'Pula', type: 'family', pricePerNight: 120 },
  { id: 'apt-4', name: 'Zagreb City Apartment', city: 'Zagreb', type: 'one-bedroom', pricePerNight: 65 },
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
  const confirmation = {
    id: 'APT-' + Date.now(),
    name,
    email,
    checkin,
    checkout,
    guests: guests || 1,
    apartment: apartment || 'standard',
    evisitorRegistered: Boolean(evisitor),
    confirmationEmailSent: true,
  };
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
