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
- Gmail notification email support for reservation/check-in submissions

Gmail setup (for form submissions)

1. Create a local `.env` file (or export env vars) with:

```bash
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
MAIL_TO=karlo.pavlovic47@gmail.com
```

2. Start the app normally (`npm start`). The server auto-loads `.env` via `dotenv`.

When configured, apartment reservation and guest check-in submissions send an email through Gmail SMTP to `MAIL_TO` (defaults to `karlo.pavlovic47@gmail.com`).

Notes

- This project uses `express` to serve `public/` and stores data in `data/bookings.json`.
- Main APIs include apartment booking, rent-a-car booking, and `/api/guest/checkin`.
- Tell me if you want React/Vite, TypeScript, tests, or Docker next.
