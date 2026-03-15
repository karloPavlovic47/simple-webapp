---
description: "Workspace-specific agent instructions and shorthand commands for future reference"
---

# Agent Instructions

This file contains personal instructions and shorthand commands for the agent.

## Project Information

This workspace contains a simple web application built with Node.js and Express. It serves static HTML pages from the `public/` directory, including pages for apartments, rent-a-car, reservations/check-in, activities, FAQ, directions, and about. The app includes APIs for apartment bookings, rent-a-car bookings, and guest online check-in (`/api/guest/checkin`) and uses `data/bookings.json` for persistent storage. It's designed as a minimal setup for a rental service website.

Current UI/flow notes:

- Main navigation is Croatian-first: `Naslovnica`, `Smjestaj`, `Rent a car`, `Aktivnosti`, `FAQ i info guide`, `Kako do nas`, `O nama`.
- Smjestaj and rent-a-car are implemented as separate interfaces with separate calendars.
- Guest flow includes online check-in, eVisitor flag, and simulated automatic email confirmation in API responses.

To start the server: Run `node server.js` in the background to launch at http://localhost:3000.

When discussing the project, update this file with relevant notes or changes.

## Shorthand Commands

Add any shorthand commands here as they are provided in future interactions.

- None yet.