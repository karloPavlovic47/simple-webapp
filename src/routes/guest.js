const express = require('express');
const { readStorage, writeStorage } = require('../services/storage');
const { canSendMail, sendMail } = require('../services/mailer');

const router = express.Router();

router.post('/guest/checkin', async (req, res) => {
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

  let mailSent = false;
  let mailError = null;

  if (canSendMail()) {
    try {
      await sendMail({
        subject: `Mljet4You guest check-in ${checkin.id}`,
        replyTo: email,
        text: [
          'New online guest check-in received.',
          `Check-in ID: ${checkin.id}`,
          `Booking ID: ${bookingId}`,
          `Guest: ${guestName}`,
          `Email: ${email}`,
          `Passport/Document: ${passportId}`,
          `Arrival date: ${arrivalDate}`,
          `eVisitor: ${checkin.evisitorRegistered ? 'Yes' : 'No'}`,
        ].join('\n'),
      });
      mailSent = true;
    } catch (error) {
      mailError = error.message;
    }
  } else {
    mailError = 'Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.';
  }

  return res.json({
    success: true,
    message: 'Online check-in completed',
    checkin,
    mailSent,
    mailError,
  });
});

module.exports = router;
