'use strict';

/**
 * MyRent API Adapter
 *
 * Ovaj modul je adapter između naše aplikacije i myrent API-ja.
 * Kontroliran je s MYRENT_MODE environment varijablom:
 *
 *   MYRENT_MODE=local  (default) — čita iz lokalnih JSON datoteka (PoC/demo)
 *   MYRENT_MODE=api              — poziva pravi MyRent API (produkcija)
 *
 * ─── KAKO PREBACITI NA PRAVI API ────────────────────────────────────────────
 * 1. Kreiraj .env datoteku u root-u projekta:
 *      MYRENT_MODE=api
 *      MYRENT_B2B_GUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 *      MYRENT_USER_GUID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 *
 * 2. MYRENT_B2B_GUID i MYRENT_USER_GUID dobijaš od klijenta iz myrent dashboarda.
 *
 * 3. Zamijeni placeholder myrentId vrijednosti u src/data/apartments.js
 *    s pravim ID-evima iz myrent sustava.
 *
 * Sve route putanje i request/response format ostaju isti — samo se
 * implementacija ispod prebacuje s lokalnih datoteka na HTTP pozive.
 * ────────────────────────────────────────────────────────────────────────────
 */

const MYRENT_MODE = process.env.MYRENT_MODE || 'local';
const MYRENT_API_BASE = 'https://api.my-rent.net';

const apartments = require('../data/apartments');
const { readStorage, writeStorage } = require('./storage');

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function findApartment(id) {
  // Prihvaca i myrentId (broj) i interni id ('apt-1')
  return apartments.find(
    (a) => String(a.myrentId) === String(id) || a.id === String(id)
  );
}

function datesOverlap(aFrom, aUntil, bFrom, bUntil) {
  return new Date(aFrom) < new Date(bUntil) && new Date(aUntil) > new Date(bFrom);
}

function buildPropertyShape(a) {
  return {
    id: a.myrentId,
    local_id: a.id,
    name: a.name,
    city: a.city,
    type: a.type,
    price_per_night: a.pricePerNight,
    currency: 'EUR',
    rating: a.rating,
    review_count: a.reviewCount,
    distance_km: a.distanceKm,
    description: a.description,
    perks: a.perks,
    image: a.imageUrl,
    image_label: a.imageLabel,
  };
}

// ─── LOCAL IMPLEMENTACIJE ────────────────────────────────────────────────────

function local_propertyList() {
  return apartments.map(buildPropertyShape);
}

function local_propertyDetails(id) {
  const a = findApartment(id);
  return a ? buildPropertyShape(a) : null;
}

function local_fastPriceAvailability(id, dateFrom, dateUntil, guests) {
  const a = findApartment(id);
  if (!a) return null;

  const storage = readStorage();
  const bookings = storage.apartments?.[a.id] || [];
  const isAvailable = !bookings.some((b) =>
    datesOverlap(dateFrom, dateUntil, b.checkIn, b.checkOut)
  );

  const from = new Date(dateFrom);
  const until = new Date(dateUntil);
  const nights = Math.max(1, Math.round((until - from) / (1000 * 60 * 60 * 24)));

  return {
    object_id: a.myrentId,
    available: isAvailable,
    price_per_night: a.pricePerNight,
    currency: 'EUR',
    nights,
    total_price: isAvailable ? a.pricePerNight * nights : null,
  };
}

function local_calendar(id, year, month) {
  const a = findApartment(id);
  if (!a) return null;

  const storage = readStorage();
  const bookings = storage.apartments?.[a.id] || [];

  const y = year || new Date().getFullYear();
  const m = month || new Date().getMonth() + 1;
  const daysInMonth = new Date(y, m, 0).getDate();

  const days = {};
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const taken = bookings.some((b) => dateStr >= b.checkIn && dateStr < b.checkOut);
    days[dateStr] = taken ? 'taken' : 'free';
  }

  return { object_id: a.myrentId, year: y, month: m, days };
}

function local_addRent(objectId, body) {
  const a = findApartment(objectId);
  if (!a) return { error: 'Property not found', status: 404 };

  const {
    from_date,
    until_date,
    price,
    currency_id = 2,
    adults = 1,
    children = 0,
    infants = 0,
    pets = 0,
    contact_name,
    contact_tel,
    contact_email,
    contact_adress,
    contact_city,
    note,
    note_user,
  } = body;

  if (!from_date || !until_date || !contact_name) {
    return {
      error: 'Nedostaju obavezna polja: from_date, until_date, contact_name',
      status: 400,
    };
  }

  const storage = readStorage();
  if (!storage.apartments[a.id]) storage.apartments[a.id] = [];
  const bookings = storage.apartments[a.id];

  if (bookings.some((b) => datesOverlap(from_date, until_date, b.checkIn, b.checkOut))) {
    return { error: 'Traženi termini nisu dostupni', status: 409 };
  }

  const from = new Date(from_date);
  const until = new Date(until_date);
  const nights = Math.max(1, Math.round((until - from) / (1000 * 60 * 60 * 24)));
  const totalPrice = price != null ? Number(price) : a.pricePerNight * nights;

  const rentId = `LOCAL-${Date.now()}`;
  const booking = {
    rentId,
    myrentObjectId: a.myrentId,
    checkIn: from_date,
    checkOut: until_date,
    nights,
    price: totalPrice,
    currency: 'EUR',
    adults: Number(adults),
    children: Number(children),
    infants: Number(infants),
    pets: Number(pets),
    guestName: contact_name,
    email: contact_email || null,
    phone: contact_tel || null,
    address: contact_adress || null,
    city: contact_city || null,
    note: note || null,
    guestNote: note_user || null,
    status: 'confirmed',
    source: 'web',
    createdAt: new Date().toISOString(),
    emailConfirmation: true,
  };

  bookings.push(booking);
  writeStorage(storage);

  return {
    status: 200,
    data: {
      id: rentId,
      object_id: a.myrentId,
      status: 'confirmed',
      from_date,
      until_date,
      nights,
      price: totalPrice,
      currency: 'EUR',
      contact_name,
      message: 'Rezervacija uspješno kreirana',
    },
  };
}

// ─── PRAVI API IMPLEMENTACIJE (aktiviraju se s MYRENT_MODE=api) ──────────────
// TODO: implementirati nakon što klijent dostavi MYRENT_B2B_GUID i MYRENT_USER_GUID

function apiHeaders() {
  return {
    accept: 'application/json',
    'content-type': 'application/json',
    b2b_guid: process.env.MYRENT_B2B_GUID || '',
    user_guid: process.env.MYRENT_USER_GUID || '',
  };
}

async function api_propertyList() {
  // GET https://api.my-rent.net/customer/list
  const res = await fetch(`${MYRENT_API_BASE}/customer/list`, { headers: apiHeaders() });
  if (!res.ok) throw new Error(`MyRent API error: ${res.status}`);
  return res.json();
}

async function api_propertyDetails(id) {
  // GET https://api.my-rent.net/object/web-details/{id}
  const res = await fetch(`${MYRENT_API_BASE}/object/web-details/${id}`, {
    headers: apiHeaders(),
  });
  if (!res.ok) throw new Error(`MyRent API error: ${res.status}`);
  return res.json();
}

async function api_fastPriceAvailability(id, dateFrom, dateUntil, guests) {
  // GET https://api.my-rent.net/customer/prices_fast/{id}?date_from=&date_until=&guests=
  const params = new URLSearchParams({ date_from: dateFrom, date_until: dateUntil, guests });
  const res = await fetch(`${MYRENT_API_BASE}/customer/prices_fast/${id}?${params}`, {
    headers: apiHeaders(),
  });
  if (!res.ok) throw new Error(`MyRent API error: ${res.status}`);
  return res.json();
}

async function api_calendar(id, year, month) {
  // GET https://api.my-rent.net/booking/calendar/{id}?year=&month=
  const params = new URLSearchParams({ year, month });
  const res = await fetch(`${MYRENT_API_BASE}/booking/calendar/${id}?${params}`, {
    headers: apiHeaders(),
  });
  if (!res.ok) throw new Error(`MyRent API error: ${res.status}`);
  return res.json();
}

async function api_addRent(objectId, body) {
  // POST https://api.my-rent.net/rents/add/{object_id}
  const res = await fetch(`${MYRENT_API_BASE}/rents/add/${objectId}`, {
    method: 'POST',
    headers: apiHeaders(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return { error: err.message || `MyRent API error: ${res.status}`, status: res.status };
  }
  const data = await res.json();
  return { status: 200, data };
}

// ─── JAVNI API MODULA ─────────────────────────────────────────────────────────

module.exports = {
  /** Trenutni način rada: 'local' ili 'api' */
  mode: MYRENT_MODE,

  isLocal: () => MYRENT_MODE === 'local',

  /**
   * Lista svih nekretnina
   * Mirrors: GET https://api.my-rent.net/customer/list
   */
  async propertyList() {
    return MYRENT_MODE === 'local' ? local_propertyList() : api_propertyList();
  },

  /**
   * Detalji jedne nekretnine
   * Mirrors: GET https://api.my-rent.net/object/web-details/{id}
   */
  async propertyDetails(id) {
    return MYRENT_MODE === 'local' ? local_propertyDetails(id) : api_propertyDetails(id);
  },

  /**
   * Brza provjera dostupnosti i cijene
   * Mirrors: GET https://api.my-rent.net/customer/prices_fast/{id}?date_from=&date_until=&guests=
   */
  async fastPriceAvailability(id, dateFrom, dateUntil, guests) {
    return MYRENT_MODE === 'local'
      ? local_fastPriceAvailability(id, dateFrom, dateUntil, guests)
      : api_fastPriceAvailability(id, dateFrom, dateUntil, guests);
  },

  /**
   * Kalendar zauzetosti po mjesecu
   * Mirrors: GET https://api.my-rent.net/booking/calendar/{id}?year=&month=
   */
  async calendar(id, year, month) {
    return MYRENT_MODE === 'local'
      ? local_calendar(id, year, month)
      : api_calendar(id, year, month);
  },

  /**
   * Kreiranje rezervacije
   * Mirrors: POST https://api.my-rent.net/rents/add/{object_id}
   * Body: from_date, until_date, price, currency_id, adults, children, infants, pets,
   *       contact_name, contact_tel, contact_email, contact_adress, contact_city,
   *       note, note_user, sync_wait, promo_code
   */
  async addRent(objectId, body) {
    return MYRENT_MODE === 'local'
      ? local_addRent(objectId, body)
      : api_addRent(objectId, body);
  },
};
