const fs = require('fs');
const { DATA_DIR, BOOKINGS_FILE } = require('../config/paths');

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

function initializeStorage() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(BOOKINGS_FILE)) fs.writeFileSync(BOOKINGS_FILE, JSON.stringify({}, null, 2));
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

module.exports = {
  initializeStorage,
  readStorage,
  writeStorage,
};
