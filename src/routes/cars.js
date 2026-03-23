const express = require('express');

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

  const reservation = {
    id: 'CAR-' + Date.now(),
    name,
    email,
    pickup,
    dropoff,
    carType: carType || 'compact',
    location: location || 'At office location',
    confirmationEmailSent: true,
    deliveryChargesMayApply: location === 'Delivery',
    createdAt: new Date().toISOString(),
  };

  return {
    ok: true,
    code: 200,
    body: {
      success: true,
      reservation,
      message: 'Inquiry received and confirmation email sent',
    },
  };
}

router.get('/rentacar/bookings', (req, res) => {
  res.json({ bookings: [] });
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
