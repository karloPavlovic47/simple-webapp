---
description: "Workspace-specific agent instructions and shorthand commands for future reference"
---

# Agent Instructions

This file contains personal instructions and shorthand commands for the agent.

## Project Information

This workspace contains a simple web application built with Node.js and Express. It serves static HTML pages from the `public/` directory, including pages for apartments, rent-a-car, reservations/check-in, activities, FAQ, directions, and about. The app includes APIs for apartment bookings, rent-a-car bookings, and guest online check-in (`/api/guest/checkin`) and uses `data/bookings.json` for persistent storage. It's designed as a minimal setup for a rental service website. The brand name is **Mljet4You**.

Current UI/flow notes:

- Main navigation is Croatian-first: `Naslovnica`, `Smjestaj`, `Rent a car`, `Aktivnosti`, `FAQ i info guide`, `Kako do nas`, `O nama`.
- Smjestaj page now redirects users to the guest portal at `https://mljet4you.hr/`.
- Rent a car now uses category-based results (Mini, Small, Medium, Comfort, Premium) with seasonal pricing tiers (1-3, 4-7, 8+ days).
- Rent a car date selection now uses one button-triggered range calendar (2 clicks for pickup/drop-off), while hidden pickup/drop-off fields stay synced for price updates and booking-mail forms.
- Guest flow includes online check-in, eVisitor flag, and optional Gmail SMTP notifications for reservation/check-in submissions (via `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `MAIL_TO`).

To start the server: Run `node server.js` in the background to launch at http://localhost:3000.

When discussing the project, update this file with relevant notes or changes.

## Shorthand Commands

Add any shorthand commands here as they are provided in future interactions.

- None yet.