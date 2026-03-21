const express = require('express');
const apartmentsRoutes = require('./apartments');
const carRoutes = require('./cars');
const guestRoutes = require('./guest');
const myrentRoutes = require('./myrent');

const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Postojeće rute (frontend ih koristi)
router.use(apartmentsRoutes);
router.use(carRoutes);
router.use(guestRoutes);

// MyRent-kompatibilne rute
// Zrcale strukturu https://api.my-rent.net/ — lokalno ili pravi API (MYRENT_MODE env)
router.use(myrentRoutes);

module.exports = router;
