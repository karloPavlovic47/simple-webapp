# Mljet4You — Sljedeći koraci do punog pokretanja

## 1. DIZAJN & SADRŽAJ STRANICA

- **Text i SEO:** Napisati definitivne tekstove za sve stranice (naslovnice, O nama, Kako do nas, itd.)
- **Slike i vizuali:** 
  - Fotografije apartmana (preporuča se min. 8-10 kvalitetnih slika po apartmanu)
  - Fotografije vozila (ako rent a car kataIog treba biti pravi, ne demo kategorije)
  - Hero slike za svaku stranicu
  - Lokalne fotografije i slike aktivnosti
- **Lokalne aktivnosti:** Definirati i opisati 3-5 ključnih aktivnosti s vremenom, cijenom i slikama
- **Contact informacije:** Email, telefon, WhatsApp, fizička adresa, radno vrijeme

---

## 2. SEO & TEHNIČKE SPECIFIKACIJE

### Obavezno za web:
- **Meta tagovi:** Title, description, keywords za svaku stranicu
- **Structured Data:** Schema.org markup (LocalBusiness, ApartmentComplex, RentalCar service)
- **Robots.txt i Sitemap:** Za search engine crawlere
- **Google Analytics:** Postavka tracking koda
- **Open Graph tagovi:** Za društvene mreže (fb, ig share previews)

### Uvjeti korištenja & Politike:
- **Privacy Policy** — GDPR compliance (obavezno ako prikuplaš podatke gostiju)
- **Terms of Service** — Uvjeti korištenja stranice, otkazivanja, odgovornosti
- **Cookie Policy** — Ako koristiš analytics/trackinge
- **Cancellation Policy** — Jasna politika otkazivanja za apartmane i rent a car
- **Data Protection Statement** — Kako tretirate eVisitor podatke

### Domain & Email:
- **Verificiraj domain** (odaberi .hr ili .com — preporuka: `mljet4you.hr`)
- **Email od hosting pružatelja** — npr. `info@mljet4you.hr`
- **DKIM/SPF/DMARC konfiguracija** — Da mail-ovi ne završe u spamu

---

## 3. HOSTING & INFRASTRUKTURA

### Kontaktirati hosting provajdera:
- **Izbor hostinga:** 
  - Preporuka: Managed hosting (npr. Hetzner, DigitalOcean, AWS Lightsail)
  - Trebat će Node.js podrška i PostgreSQL/MongoDB (ako trebate bazu)
  - Minimalno: 2GB RAM, 1 vCPU (za početak)
  
- **SSL Certifikat:** Let's Encrypt (besplatno)
- **CDN:** Preporuka Cloudflare (besplatno plan je dovoljan)
- **Email Setup:** SMTP konfiguracija za automatske mailove (Sendgrid, Mailgun ili SendPulse)

### Database & Booking Sistem:
- Trenutno se koristi `data/bookings.json` (file-based)
- **Preporuka za produkciju:** PostgreSQL ili MongoDB
- **Sinkronizacija:** Ako koristiš vanjske sustave (airbnb, booking.com), trebat će API integracija

---

## 4. DODATNE PROVJERE

- [ ] Testiranje mobilnog sučelja (iOS Safari, Android Chrome)
- [ ] Performance test (Google PageSpeed Insights)
- [ ] Accessibility audit (WCAG 2.1 AA standard)
- [ ] 404 error stranica
- [ ] Kontakt forma (ako trebate zahtjevima)
- [ ] Multi-language setup ako trebate EN/HR dinamički

---

## 5. TIMELINE PREPORUKE

| Faza | Trajanje | Status |
|------|----------|--------|
| **1. Sadržaj & Slike** | 2-3 tjedna | ⏳ Trebalo |
| **2. SEO & Politike** | 1 tjedan | ⏳ Trebalo |
| **3. Hosting Setup** | 2-3 dana | ⏳ Trebalo |
| **4. Testing & QA** | 3-5 dana | ⏳ Trebalo |
| **5. Golf & Deploy** | 1 dan | ⏳ Trebalo |

**Procjena:** ~4-5 tjedana od početka do live stanja (bez kašnjenja na dogovore s klijentom)

---

## 6. KONTAKT ČOVJEKA ZA HOSTING

**Prije nego trebaš previ komu:**
1. **Odaberi hosting provider** — preporuka je Hetzner ili DigitalOcean za European hosts
2. **Dogovori se s njima** — koji će Node.js verzija, kako će se deployati kod
3. **SFTP/Git Access** — trebat će ti credentials za code deploy
4. **Email setup** — koji će SMTP provider koristiti (npr. Sendgrid za transakcijske mailove)

**Tipičan razgovor s hosting pružateljem:**
```
Trebam za Node.js aplikaciju (Express):
- Node 18+
- Port 3000 interno, mapiran na port 80/443
- Let's Encrypt SSL
- 2GB RAM minimum
- Sendgrid integraciju za mail slanje
- Backup strategie (daily snapshots)
```

---

## Napomene

- Aplikacija je sad **gotova za demo**, ali nisu uključeni pravi sadržaj, slike, niti je optimizirane za produkciju
- eVisitor integracija je **simulirana** — trebat će pravi API ako trebate stvarni eVisitor zahtjeve
- Booking system je **file-based** — za produkciju trebate baza podataka

**Sljedeća akcija:** Kontaktiraj klijenta za sadržaj (tekst, slike) i odredi rock datum za go-live.
