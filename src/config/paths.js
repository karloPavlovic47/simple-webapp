const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

module.exports = {
  ROOT_DIR,
  PUBLIC_DIR,
  DATA_DIR,
  BOOKINGS_FILE,
};
