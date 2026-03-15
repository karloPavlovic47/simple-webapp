# Simple Webapp

Minimal Node + Express static webapp.

Quick start

```bash
cd simple-webapp
npm install
npm start
```

Open http://localhost:3000 and navigate the Croatian-first site:

- `Naslovnica`
- `Smjestaj` (separate apartment booking calendar)
- `Rent a car` (separate vehicle booking calendar)
- `Aktivnosti`
- `FAQ i info guide`
- `Kako do nas`
- `O nama`

Guest flow is available at `/reserve.html` with:

- Online check-in form
- eVisitor flag
- Simulated confirmation email in API response

Notes

- This project uses `express` to serve `public/` and stores data in `data/bookings.json`.
- Main APIs include apartment booking, rent-a-car booking, and `/api/guest/checkin`.
- Tell me if you want React/Vite, TypeScript, tests, or Docker next.
