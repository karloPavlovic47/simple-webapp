const express = require('express');
const { readStorage, writeStorage } = require('../services/storage');

const router = express.Router();

router.post('/guest/checkin', (req, res) => {
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

  return res.json({
    success: true,
    message: 'Online check-in completed',
    checkin,
  });
});

module.exports = router;
