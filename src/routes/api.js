const express = require('express');
const apartmentsRoutes = require('./apartments');
const carRoutes = require('./cars');
const guestRoutes = require('./guest');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

router.use(apartmentsRoutes);
router.use(carRoutes);
router.use(guestRoutes);

module.exports = router;
