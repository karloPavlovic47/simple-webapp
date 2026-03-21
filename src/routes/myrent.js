'use strict';

/**
 * MyRent-kompatibilne API rute
 *
 * Ove rute ZRCALE myrent Web API strukturu:
 *   https://myrent.readme.io/reference/web-api-guide
 *
 * U lokalnom načinu rada (MYRENT_MODE=local) čitaju iz bookings.json.
 * U produkcijskom načinu (MYRENT_MODE=api) prosljeđuju pozive na
 *   https://api.my-rent.net/ s klijentovim API ključem.
 *
 * Putanje:
 *   GET  /api/customer/list                       → lista nekretnina
 *   GET  /api/customer/prices_fast/:id            → dostupnost i cijena
 *   GET  /api/object/web-details/:id              → detalji nekretnine
 *   GET  /api/booking/calendar/:id                → kalendar zauzetosti
 *   POST /api/rents/add/:object_id                → kreiranje rezervacije
 */

const { Router } = require('express');
const myrent = require('../services/myrent');

const router = Router();

// ─── STATUS ──────────────────────────────────────────────────────────────────

/**
 * GET /api/myrent/status
 * Informacija o trenutnom modu (local / api)
 */
router.get('/myrent/status', (_req, res) => {
  res.json({
    mode: myrent.mode,
    isLocal: myrent.isLocal(),
    apiBase: myrent.isLocal() ? 'local files' : 'https://api.my-rent.net',
    note: myrent.isLocal()
      ? 'Postavite MYRENT_MODE=api u .env za spajanje na pravi myrent API'
      : 'Spojen na pravi myrent API',
  });
});

// ─── CUSTOMER ────────────────────────────────────────────────────────────────

/**
 * GET /api/customer/list
 * Lista svih nekretnina
 * Mirrors: GET https://api.my-rent.net/customer/list
 */
router.get('/customer/list', async (_req, res) => {
  try {
    const data = await myrent.propertyList();
    res.json({ success: true, mode: myrent.mode, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/customer/prices_fast/:id?date_from=YYYY-MM-DD&date_until=YYYY-MM-DD&guests=2
 * Brza provjera dostupnosti i ukupne cijene za određene datume
 * Mirrors: GET https://api.my-rent.net/customer/prices_fast/{id}
 */
router.get('/customer/prices_fast/:id', async (req, res) => {
  const { id } = req.params;
  const { date_from, date_until, guests = 1 } = req.query;

  if (!date_from || !date_until) {
    return res
      .status(400)
      .json({ success: false, error: 'Obavezni parametri: date_from i date_until' });
  }

  try {
    const data = await myrent.fastPriceAvailability(id, date_from, date_until, Number(guests));
    if (!data) return res.status(404).json({ success: false, error: 'Nekretnina nije pronađena' });
    res.json({ success: true, mode: myrent.mode, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── OBJECT ──────────────────────────────────────────────────────────────────

/**
 * GET /api/object/web-details/:id
 * Detalji jedne nekretnine
 * Mirrors: GET https://api.my-rent.net/object/web-details/{id}
 */
router.get('/object/web-details/:id', async (req, res) => {
  try {
    const data = await myrent.propertyDetails(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Nekretnina nije pronađena' });
    res.json({ success: true, mode: myrent.mode, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── BOOKING ─────────────────────────────────────────────────────────────────

/**
 * GET /api/booking/calendar/:id?year=2026&month=6
 * Kalendar zauzetosti za dani objekt i mjesec
 * Mirrors: GET https://api.my-rent.net/booking/calendar/{id}
 */
router.get('/booking/calendar/:id', async (req, res) => {
  const { year, month } = req.query;

  try {
    const data = await myrent.calendar(
      req.params.id,
      year ? Number(year) : null,
      month ? Number(month) : null
    );
    if (!data) return res.status(404).json({ success: false, error: 'Nekretnina nije pronađena' });
    res.json({ success: true, mode: myrent.mode, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── RENTS ───────────────────────────────────────────────────────────────────

/**
 * POST /api/rents/add/:object_id
 * Kreiranje rezervacije
 * Mirrors: POST https://api.my-rent.net/rents/add/{object_id}
 *
 * Body parametri (myrent format):
 *   from_date        string  required  — datum dolaska (YYYY-MM-DD)
 *   until_date       string  required  — datum odlaska (YYYY-MM-DD)
 *   contact_name     string  required  — ime i prezime gosta
 *   price            number           — ukupna cijena (izračunava se automatski ako se ne pošalje)
 *   currency_id      number  def: 2   — valuta (2 = EUR)
 *   adults           number  def: 1
 *   children         number  def: 0
 *   infants          number  def: 0
 *   pets             number  def: 0
 *   contact_tel      string           — telefon
 *   contact_email    string           — e-mail
 *   contact_adress   string           — adresa
 *   contact_city     string           — grad
 *   note             string           — interna napomena
 *   note_user        string           — napomena gosta
 *   sync_wait        string  def: Y   — Y = sistemski emailovi, N = vlastiti
 *   promo_code       string           — promo kod
 */
router.post('/rents/add/:object_id', async (req, res) => {
  try {
    const result = await myrent.addRent(req.params.object_id, req.body);

    if (result.error) {
      return res.status(result.status || 400).json({ success: false, error: result.error });
    }

    res.json({ success: true, mode: myrent.mode, ...result.data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
