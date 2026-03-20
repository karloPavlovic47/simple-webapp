const express = require('express');
const { readStorage, writeStorage } = require('../services/storage');

const router = express.Router();

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
  const overlap = storage.cars.some((booking) => {
    if (booking.carType !== (carType || 'compact') || booking.location !== (location || 'Zagreb')) return false;
    const bStart = new Date(booking.pickup);
    const bEnd = new Date(booking.dropoff);
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

router.get('/rentacar/bookings', (req, res) => {
  const storage = readStorage();
  res.json({ bookings: storage.cars });
});

router.post('/rentacar/book', (req, res) => {
  const result = createCarReservation(req.body);
  res.status(result.code).json(result.body);
});

// Backwards-compatible endpoint
router.post('/rent-car', (req, res) => {
  const result = createCarReservation(req.body);
  res.status(result.code).json(result.body);
});

module.exports = router;
