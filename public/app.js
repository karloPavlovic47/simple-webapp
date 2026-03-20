function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

const I18N = {
  hr: {
    'nav.apartments': 'Smjestaj',
    'nav.rentacar': 'Rent a car',
    'nav.activities': 'Aktivnosti',
    'nav.faq': 'FAQ i info guide',
    'nav.directions': 'Kako do nas',
    'nav.about': 'O nama',
    'title.home': 'Mljet4You',
    'title.apartments': 'Smjestaj - Mljet4You',
    'title.rentacar': 'Rent a car - Mljet4You',
    'title.reserve': 'Online check-in i rezervacija - Mljet4You',
    'title.activities': 'Aktivnosti - Mljet4You',
    'title.faq': 'FAQ i info guide - Mljet4You',
    'title.directions': 'Kako do nas - Mljet4You',
    'title.about': 'O nama - Mljet4You',
    'home.heroTitle': 'Renting your property has never been easier',
    'home.heroText': 'Dva sucelja, jedna jasna logika: odvojeni kalendari za smjestaj i rent a car, uz gostujuce procese za online check-in, eVisitor prijavu i automatsku potvrdu rezervacije.',
    'home.showcaseAria': 'Naslovni prikaz',
    'home.eyebrow': 'JUST LEAVE IT TO BILL AND JOHN',
    'home.gifTitle': 'Da se pokrece na hover misem, ne autoplay',
    'home.gifAlt': 'Brod na moru',
    'home.apartmentsBtn': 'Smjestaj sucelje',
    'home.rentacarBtn': 'Rent a car sucelje',
    'home.editorial.interfacesTitle': 'Dva sucelja',
    'home.editorial.interfacesAccommodation': 'smjestaj',
    'home.editorial.interfacesRentacar': 'rent a car',
    'home.editorial.interfacesCalendars': 'oba s odvojenim kalendarima',
    'home.editorial.otherLinksTitle': 'Ostali linkovi',
    'home.editorial.otherLinksText': 'samo tekst s fotografijama',
    'home.editorial.guestTitle': 'Gost / posjetitelj',
    'home.editorial.guestCheckin': 'online check in',
    'home.editorial.guestEvisitor': 'prijava u eVisitor',
    'home.editorial.guestMail': 'automatski mail potvrda rezervacije',
    'home.notes.title': 'Operativni model',
    'home.notes.item1': 'Dva sucelja: smjestaj i rent a car',
    'home.notes.item2': 'Oba modula imaju odvojene kalendare',
    'home.notes.item3': 'Ostali linkovi su tekstualne info stranice s fotografijama',
    'home.notes.item4': 'Gost/posjetitelj: online check-in, prijava u eVisitor, automatski mail potvrde',
    'home.notes.button': 'Online check-in i rezervacija',
    'apartments.introTitle': 'Pronadi svoj idealan apartman',
    'apartments.introText': 'Pretrazi smjestaj po gradu, terminu i broju gostiju.',
    'apartments.location': 'Lokacija',
    'apartments.locationPlaceholder': 'npr. Split',
    'apartments.checkin': 'Check-in',
    'apartments.checkout': 'Check-out',
    'apartments.guests': 'Gosti',
    'apartments.availableTitle': 'Dostupni apartmani',
    'rentacar.introTitle': 'Rent a car pretraga',
    'rentacar.introText': 'Odaberi lokaciju i termine te rezerviraj vozilo direktno iz rezultata.',
    'rentacar.pickupLocation': 'Lokacija preuzimanja',
    'rentacar.pickupDate': 'Datum preuzimanja',
    'rentacar.dropoffDate': 'Datum povrata',
    'rentacar.drivers': 'Vozaca',
    'rentacar.available': 'Dostupna vozila',
    'reserve.introTitle': 'Gost / posjetitelj',
    'reserve.introText': 'Online check-in, prijava u eVisitor i automatski mail potvrde rezervacije.',
    'reserve.quickBookingTitle': 'Brza rezervacija smjestaja',
    'reserve.checkinTitle': 'Online check-in gosta',
    'reserve.sendReservation': 'Posalji rezervaciju',
    'reserve.finishCheckin': 'Zavrsi online check-in',
    'reserve.form.fullName': 'Ime i prezime',
    'reserve.form.email': 'Email',
    'reserve.form.checkin': 'Check-in',
    'reserve.form.checkout': 'Check-out',
    'reserve.form.guests': 'Broj gostiju',
    'reserve.form.apartmentType': 'Tip apartmana',
    'reserve.form.apartmentTypeStudio': 'Studio',
    'reserve.form.apartmentTypeOneBedroom': 'One-bedroom',
    'reserve.form.apartmentTypeFamily': 'Family',
    'reserve.form.autoEvisitor': 'Automatska prijava u eVisitor',
    'reserve.previewTitle': 'Pregled zauzetosti',
    'reserve.previewHint': 'Odaberite datume za pregled dostupnosti.',
    'reserve.previewLoading': 'Provjera zauzetosti...',
    'reserve.previewInvalidDates': 'Unesite ispravne datume za prikaz pregleda.',
    'reserve.previewSummary': '{available} od {total} apartmana dostupno.',
    'reserve.previewTop': 'Prvi dostupni: {name} ({city}) - {price}/noc',
    'reserve.previewNone': 'Nema dostupnih apartmana za odabrane datume.',
    'reserve.previewError': 'Greska pri dohvatu pregleda: {message}',
    'reserve.checkinForm.bookingId': 'ID rezervacije',
    'reserve.checkinForm.guestName': 'Ime gosta',
    'reserve.checkinForm.guestEmail': 'Email gosta',
    'reserve.checkinForm.passport': 'Broj putovnice / dokumenta',
    'reserve.checkinForm.arrivalDate': 'Datum dolaska',
    'reserve.checkinForm.confirmEvisitor': 'Potvrdi eVisitor prijavu',
    'activities.title': 'Aktivnosti',
    'activities.text': 'Prijedlozi iskustava za goste, bez kompleksnih booking modula.',
    'activities.card1.title': 'Jedrenje i brodski izleti',
    'activities.card1.text': 'Dnevni i poludnevni izleti po otocima, sunset tura i privatni transferi brodom.',
    'activities.card2.title': 'Gastro i lokalne ture',
    'activities.card2.text': 'Degustacije maslinovog ulja i vina, lokalna kuhinja te market walking ture.',
    'activities.card3.title': 'Aktivni odmor',
    'activities.card3.text': 'Biciklizam, planinarenje i obiteljske avanture prilagodene sezoni i vremenu.',
    'faq.title': 'FAQ i info guide',
    'faq.text': 'Najvaznije informacije prije dolaska i tijekom boravka.',
    'faq.card1.title': 'Kako funkcionira check-in?',
    'faq.card1.text': 'Nakon rezervacije gost ispunjava online check-in obrazac i dobiva mail potvrdu.',
    'faq.card2.title': 'eVisitor prijava',
    'faq.card2.text': 'Podaci gosta mogu se obraditi kroz eVisitor prijavu uz potvrdu gosta u obrascu.',
    'faq.card3.title': 'Politika otkazivanja',
    'faq.card3.text': 'Standardna politika je fleksibilna do 7 dana prije dolaska, osim ako nije drugacije navedeno.',
    'directions.title': 'Kako do nas',
    'directions.text': 'Kontakt tocke i smjernice za dolazak do objekata i rent a car lokacija.',
    'directions.card1.title': 'Dolazak automobilom',
    'directions.card1.text': 'Autoceste A1 i A6 povezane su s glavnim destinacijama. Preporuka je rezervacija parkinga unaprijed.',
    'directions.card2.title': 'Transfer i javni prijevoz',
    'directions.card2.text': 'Moguci su transferi od aerodroma, a gradski prijevoz i trajekti voze po sezonskom rasporedu.',
    'about.title': 'O nama',
    'about.text': 'Mali tim koji vodi smjestaj i rent a car uslugu uz jasne procese za goste.',
    'about.card1.title': 'Nas pristup',
    'about.card1.text': 'Prakticna komunikacija, transparentne cijene i brza podrska tijekom boravka.',
    'about.card2.title': 'Lokalno iskustvo',
    'about.card2.text': 'Preporuke lokacija, aktivnosti i ruta koje odgovaraju profilu gosta.',
    'about.card3.title': 'Podrska 7/7',
    'about.card3.text': 'Operativna podrska za check-in, transfer i rent a car koordinaciju.',
    'common.search': 'Pretrazi',
    'common.languageSelector': 'Odabir jezika',
    'common.languageCroatian': 'Hrvatski',
    'common.languageEnglish': 'Engleski',
    'common.loadingResults': 'Ucitavanje rezultata...',
    'common.loadingApartments': 'Ucitavanje apartmana...',
    'common.loadingVehicles': 'Ucitavanje vozila...',
    'common.errorPrefix': 'Error',
    'common.requestFailed': 'Neuspjesan zahtjev',
    'common.locale': 'hr-HR',
    'common.monthLocale': 'hr-HR',
    'contact.linksAria': 'Kontakt linkovi',
    'contact.emailAria': 'Posalji email',
    'contact.whatsappAria': 'Otvori Whatsapp',
    'contact.mapAria': 'Otvori lokaciju na mapi',
    'reserve.sending': 'Slanje rezervacije...',
    'reserve.processing': 'Obrada online check-ina...',
    'car.form.name': 'Ime i prezime',
    'car.form.email': 'Email',
    'car.form.pickup': 'Datum preuzimanja',
    'car.form.dropoff': 'Datum povrata',
    'car.form.location': 'Lokacija',
    'car.form.vehicleType': 'Tip vozila',
    'car.form.confirm': 'Potvrdi rezervaciju vozila',
    'car.sending': 'Slanje rezervacije vozila...',
    'car.reservationSuccess': 'Rezervacija uspjesna: {id}',
    'car.rating': 'Ocjena {rating}',
    'car.reviews': '{count} recenzija',
    'car.seatsCategory': '{count} sjedala • Kategorija: {type}',
    'car.available': 'Dostupno',
    'car.unavailableDates': 'Nedostupno za odabrane datume',
    'car.days': '{count} dana',
    'car.pricePerDay': 'Cijena po danu',
    'car.perDaySuffix': '/ dan',
    'car.book': 'Rezerviraj vozilo',
    'car.hideForm': 'Sakrij formu',
    'car.notAvailable': 'Trenutno nedostupno',
    'car.invalidDates': 'Datum povrata mora biti nakon datuma preuzimanja.',
    'car.zeroResults': 'Pronadeno 0 vozila',
    'car.fixDates': 'Ispravite datume i pokusajte ponovno.',
    'car.foundResults': 'Pronadena {count} vozila',
    'car.summary': '{available} dostupno na lokaciji {location} za odabrani termin.',
    'apartments.form.name': 'Ime i prezime',
    'apartments.form.email': 'Email',
    'apartments.form.checkin': 'Check-in',
    'apartments.form.checkout': 'Check-out',
    'apartments.form.guests': 'Broj gostiju',
    'apartments.form.evisitor': 'eVisitor prijava',
    'apartments.form.confirm': 'Potvrdi rezervaciju',
    'apartments.sending': 'Slanje rezervacije...',
    'apartments.reservationSuccess': 'Rezervacija uspjesna: {id}',
    'apartments.rating': 'Ocjena {rating}',
    'apartments.reviews': '{count} recenzija',
    'apartments.type': 'Tip: {type}',
    'apartments.available': 'Dostupno',
    'apartments.unavailableDates': 'Zauzeto za odabrane datume',
    'apartments.nights': '{count} nocenja',
    'apartments.pricePerNight': 'Cijena po noci',
    'apartments.perNightSuffix': '/ noc',
    'apartments.bookNow': 'Rezerviraj odmah',
    'apartments.hideForm': 'Sakrij formu',
    'apartments.notAvailable': 'Trenutno nedostupno',
    'apartments.invalidDates': 'Check-out datum mora biti nakon check-in datuma.',
    'apartments.zeroResults': 'Pronadeno 0 apartmana',
    'apartments.fixDates': 'Ispravite datume i pokusajte ponovno.',
    'apartments.noResults': 'Nema rezultata za trazene kriterije.',
    'apartments.foundResults': 'Pronadeno {count} apartmana',
    'apartments.summary': '{available} dostupno za trazeni termin. Odabir gostiju: {guests}.',
  },
  en: {
    'nav.apartments': 'Accommodation',
    'nav.rentacar': 'Rent a car',
    'nav.activities': 'Activities',
    'nav.faq': 'FAQ and info guide',
    'nav.directions': 'How to reach us',
    'nav.about': 'About us',
    'title.home': 'Mljet4You',
    'title.apartments': 'Accommodation - Mljet4You',
    'title.rentacar': 'Rent a car - Mljet4You',
    'title.reserve': 'Online check-in and reservation - Mljet4You',
    'title.activities': 'Activities - Mljet4You',
    'title.faq': 'FAQ and info guide - Mljet4You',
    'title.directions': 'How to reach us - Mljet4You',
    'title.about': 'About us - Mljet4You',
    'home.heroTitle': 'Renting your property has never been easier',
    'home.heroText': 'Two interfaces, one clear logic: separate calendars for accommodation and rent-a-car, with guest flows for online check-in, eVisitor registration, and automatic booking confirmation.',
    'home.showcaseAria': 'Hero showcase',
    'home.eyebrow': 'JUST LEAVE IT TO BILL AND JOHN',
    'home.gifTitle': 'Starts on mouse hover, not autoplay',
    'home.gifAlt': 'Boat at sea',
    'home.apartmentsBtn': 'Accommodation interface',
    'home.rentacarBtn': 'Rent-a-car interface',
    'home.editorial.interfacesTitle': 'Two interfaces',
    'home.editorial.interfacesAccommodation': 'accommodation',
    'home.editorial.interfacesRentacar': 'rent a car',
    'home.editorial.interfacesCalendars': 'both with separate calendars',
    'home.editorial.otherLinksTitle': 'Other links',
    'home.editorial.otherLinksText': 'text-only informational pages with photos',
    'home.editorial.guestTitle': 'Guest / visitor',
    'home.editorial.guestCheckin': 'online check-in',
    'home.editorial.guestEvisitor': 'eVisitor registration',
    'home.editorial.guestMail': 'automatic booking confirmation email',
    'home.notes.title': 'Operating model',
    'home.notes.item1': 'Two interfaces: accommodation and rent a car',
    'home.notes.item2': 'Both modules have separate calendars',
    'home.notes.item3': 'Other links are text-based info pages with photos',
    'home.notes.item4': 'Guest/visitor flow: online check-in, eVisitor registration, automatic confirmation email',
    'home.notes.button': 'Online check-in and reservation',
    'apartments.introTitle': 'Find your ideal apartment',
    'apartments.introText': 'Search accommodation by city, dates, and number of guests.',
    'apartments.location': 'Location',
    'apartments.locationPlaceholder': 'e.g. Split',
    'apartments.checkin': 'Check-in',
    'apartments.checkout': 'Check-out',
    'apartments.guests': 'Guests',
    'apartments.availableTitle': 'Available apartments',
    'rentacar.introTitle': 'Rent-a-car search',
    'rentacar.introText': 'Choose location and dates, then reserve a vehicle directly from the results.',
    'rentacar.pickupLocation': 'Pickup location',
    'rentacar.pickupDate': 'Pickup date',
    'rentacar.dropoffDate': 'Drop-off date',
    'rentacar.drivers': 'Drivers',
    'rentacar.available': 'Available vehicles',
    'reserve.introTitle': 'Guest / visitor',
    'reserve.introText': 'Online check-in, eVisitor registration, and automatic reservation confirmation email.',
    'reserve.quickBookingTitle': 'Quick accommodation reservation',
    'reserve.checkinTitle': 'Guest online check-in',
    'reserve.sendReservation': 'Send reservation',
    'reserve.finishCheckin': 'Finish online check-in',
    'reserve.form.fullName': 'Full name',
    'reserve.form.email': 'Email',
    'reserve.form.checkin': 'Check-in',
    'reserve.form.checkout': 'Check-out',
    'reserve.form.guests': 'Number of guests',
    'reserve.form.apartmentType': 'Apartment type',
    'reserve.form.apartmentTypeStudio': 'Studio',
    'reserve.form.apartmentTypeOneBedroom': 'One-bedroom',
    'reserve.form.apartmentTypeFamily': 'Family',
    'reserve.form.autoEvisitor': 'Automatic eVisitor registration',
    'reserve.previewTitle': 'Occupancy preview',
    'reserve.previewHint': 'Choose dates to preview availability.',
    'reserve.previewLoading': 'Checking occupancy...',
    'reserve.previewInvalidDates': 'Enter valid dates to see preview.',
    'reserve.previewSummary': '{available} of {total} apartments available.',
    'reserve.previewTop': 'First available: {name} ({city}) - {price}/night',
    'reserve.previewNone': 'No apartments are available for selected dates.',
    'reserve.previewError': 'Preview error: {message}',
    'reserve.checkinForm.bookingId': 'Booking ID',
    'reserve.checkinForm.guestName': 'Guest name',
    'reserve.checkinForm.guestEmail': 'Guest email',
    'reserve.checkinForm.passport': 'Passport / document number',
    'reserve.checkinForm.arrivalDate': 'Arrival date',
    'reserve.checkinForm.confirmEvisitor': 'Confirm eVisitor registration',
    'activities.title': 'Activities',
    'activities.text': 'Suggested experiences for guests, without complex booking modules.',
    'activities.card1.title': 'Sailing and boat trips',
    'activities.card1.text': 'Full-day and half-day island trips, sunset tours, and private boat transfers.',
    'activities.card2.title': 'Gastronomy and local tours',
    'activities.card2.text': 'Olive oil and wine tastings, local cuisine, and market walking tours.',
    'activities.card3.title': 'Active holiday',
    'activities.card3.text': 'Cycling, hiking, and family adventures adapted to season and weather.',
    'faq.title': 'FAQ and info guide',
    'faq.text': 'Most important information before arrival and during your stay.',
    'faq.card1.title': 'How does check-in work?',
    'faq.card1.text': 'After booking, the guest completes the online check-in form and receives a confirmation email.',
    'faq.card2.title': 'eVisitor registration',
    'faq.card2.text': 'Guest data can be processed through eVisitor registration with guest confirmation in the form.',
    'faq.card3.title': 'Cancellation policy',
    'faq.card3.text': 'Standard policy is flexible up to 7 days before arrival, unless stated otherwise.',
    'directions.title': 'How to reach us',
    'directions.text': 'Contact points and directions to accommodation and rent-a-car locations.',
    'directions.card1.title': 'Arriving by car',
    'directions.card1.text': 'A1 and A6 motorways are connected to main destinations. Parking reservation in advance is recommended.',
    'directions.card2.title': 'Transfers and public transport',
    'directions.card2.text': 'Airport transfers are available, and city transport and ferries run on seasonal schedules.',
    'about.title': 'About us',
    'about.text': 'A small team running accommodation and rent-a-car services with clear guest processes.',
    'about.card1.title': 'Our approach',
    'about.card1.text': 'Practical communication, transparent pricing, and fast support during your stay.',
    'about.card2.title': 'Local experience',
    'about.card2.text': 'Recommendations for locations, activities, and routes tailored to guest profiles.',
    'about.card3.title': 'Support 7/7',
    'about.card3.text': 'Operational support for check-in, transfers, and rent-a-car coordination.',
    'common.search': 'Search',
    'common.languageSelector': 'Language selector',
    'common.languageCroatian': 'Croatian',
    'common.languageEnglish': 'English',
    'common.loadingResults': 'Loading results...',
    'common.loadingApartments': 'Loading apartments...',
    'common.loadingVehicles': 'Loading vehicles...',
    'common.errorPrefix': 'Error',
    'common.requestFailed': 'Request failed',
    'common.locale': 'en-US',
    'common.monthLocale': 'en-US',
    'contact.linksAria': 'Contact links',
    'contact.emailAria': 'Send email',
    'contact.whatsappAria': 'Open WhatsApp',
    'contact.mapAria': 'Open map location',
    'reserve.sending': 'Sending reservation...',
    'reserve.processing': 'Processing online check-in...',
    'car.form.name': 'Full name',
    'car.form.email': 'Email',
    'car.form.pickup': 'Pickup date',
    'car.form.dropoff': 'Drop-off date',
    'car.form.location': 'Location',
    'car.form.vehicleType': 'Vehicle type',
    'car.form.confirm': 'Confirm vehicle reservation',
    'car.sending': 'Sending vehicle reservation...',
    'car.reservationSuccess': 'Reservation successful: {id}',
    'car.rating': 'Rating {rating}',
    'car.reviews': '{count} reviews',
    'car.seatsCategory': '{count} seats • Category: {type}',
    'car.available': 'Available',
    'car.unavailableDates': 'Unavailable for selected dates',
    'car.days': '{count} days',
    'car.pricePerDay': 'Price per day',
    'car.perDaySuffix': '/ day',
    'car.book': 'Reserve vehicle',
    'car.hideForm': 'Hide form',
    'car.notAvailable': 'Currently unavailable',
    'car.invalidDates': 'Drop-off date must be after pickup date.',
    'car.zeroResults': 'Found 0 vehicles',
    'car.fixDates': 'Please correct the dates and try again.',
    'car.foundResults': 'Found {count} vehicles',
    'car.summary': '{available} available in {location} for the selected period.',
    'apartments.form.name': 'Full name',
    'apartments.form.email': 'Email',
    'apartments.form.checkin': 'Check-in',
    'apartments.form.checkout': 'Check-out',
    'apartments.form.guests': 'Guests',
    'apartments.form.evisitor': 'eVisitor registration',
    'apartments.form.confirm': 'Confirm reservation',
    'apartments.sending': 'Sending reservation...',
    'apartments.reservationSuccess': 'Reservation successful: {id}',
    'apartments.rating': 'Rating {rating}',
    'apartments.reviews': '{count} reviews',
    'apartments.type': 'Type: {type}',
    'apartments.available': 'Available',
    'apartments.unavailableDates': 'Booked for selected dates',
    'apartments.nights': '{count} nights',
    'apartments.pricePerNight': 'Price per night',
    'apartments.perNightSuffix': '/ night',
    'apartments.bookNow': 'Book now',
    'apartments.hideForm': 'Hide form',
    'apartments.notAvailable': 'Currently unavailable',
    'apartments.invalidDates': 'Check-out date must be after check-in date.',
    'apartments.zeroResults': 'Found 0 apartments',
    'apartments.fixDates': 'Please correct the dates and try again.',
    'apartments.noResults': 'No results for the selected criteria.',
    'apartments.foundResults': 'Found {count} apartments',
    'apartments.summary': '{available} available for selected dates. Guests selected: {guests}.',
  },
};

let currentLang = localStorage.getItem('mljet4you-lang') || 'hr';
if (!I18N[currentLang]) currentLang = 'hr';

function t(key, vars = {}) {
  const dictionary = I18N[currentLang] || I18N.hr;
  const template = dictionary[key] || I18N.hr[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.setAttribute('title', t(el.dataset.i18nTitle));
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.setAttribute('alt', t(el.dataset.i18nAlt));
  });

  const titleKey = document.body?.dataset?.titleKey;
  if (titleKey) {
    document.title = t(titleKey);
  }
}

function initLocalization() {
  applyStaticTranslations();

  document.querySelectorAll('.lang-flag').forEach((button) => {
    const lang = button.dataset.lang === 'en' ? 'en' : 'hr';
    button.classList.toggle('is-active', lang === currentLang);
    button.addEventListener('click', () => {
      const nextLang = lang;
      if (nextLang === currentLang) return;
      localStorage.setItem('mljet4you-lang', nextLang);
      window.location.reload();
    });
  });
}

function initGifPlayers() {
  document.querySelectorAll('.gif-player').forEach((player) => {
    const img = player.querySelector('.gif-img');
    const canvas = player.querySelector('.gif-canvas');
    if (!img || !canvas) return;

    // Draw first frame to canvas once image loads (freeze it)
    function drawFrame() {
      canvas.width = img.naturalWidth || img.offsetWidth;
      canvas.height = img.naturalHeight || img.offsetHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    if (img.complete && img.naturalWidth) {
      drawFrame();
    } else {
      img.addEventListener('load', drawFrame, { once: true });
    }

    player.addEventListener('mouseenter', () => {
      // Reload GIF to restart from frame 1 and play
      img.src = img.src.split('?')[0] + '?t=' + Date.now();
      player.classList.add('playing');
    });

    player.addEventListener('mouseleave', () => {
      player.classList.remove('playing');
      // Redraw frozen frame after short delay to let GIF reload
      setTimeout(drawFrame, 60);
    });
  });
}

initLocalization();
initGifPlayers();

function initBackgroundParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function updateBackgroundPosition() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const rawProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
    const progress = Math.max(0, Math.min(1, rawProgress));
    // Non-linear mapping gives a parallax feel while still ending exactly at 100%.
    const eased = Math.pow(progress, 0.85);
    document.body.style.setProperty('--bg-scroll-y', `${(eased * 100).toFixed(3)}%`);
    ticking = false;
  }

  function onScrollOrResize() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateBackgroundPosition);
  }

  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
  updateBackgroundPosition();
}

initBackgroundParallax();

function datesBetween(startStr, endStr) {
  const arr = [];
  const cur = new Date(startStr);
  const end = new Date(endStr);
  while (cur < end) {
    arr.push(formatDate(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return arr;
}

function formDataToObject(formElement) {
  const formData = new FormData(formElement);
  const body = Object.fromEntries(formData.entries());
  ['evisitor'].forEach((field) => {
    if (formElement.elements[field]) {
      body[field] = formElement.elements[field].checked;
    }
  });
  return body;
}

function renderMonthCalendar(bookedDatesSet) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar = document.createElement('div');
  calendar.className = 'calendar fade-up';

  const header = document.createElement('div');
  header.className = 'calendar-header';
  header.textContent = first.toLocaleString(t('common.monthLocale'), { month: 'long', year: 'numeric' });
  calendar.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  for (let i = 0; i < startDay; i += 1) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'cal-cell empty';
    grid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const key = formatDate(date);
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    cell.textContent = day;
    if (bookedDatesSet.has(key)) cell.classList.add('booked');
    grid.appendChild(cell);
  }

  calendar.appendChild(grid);
  return calendar;
}

async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || t('common.requestFailed'));
  }
  return data;
}

const reserveForm = document.getElementById('reserveForm');
if (reserveForm) {
  const reservePreviewSummary = document.getElementById('reservePreviewSummary');

  async function refreshReservePreview() {
    if (!reservePreviewSummary) return;

    const checkin = reserveForm.elements.checkin?.value;
    const checkout = reserveForm.elements.checkout?.value;
    const apartment = reserveForm.elements.apartment?.value;

    if (!checkin || !checkout) {
      reservePreviewSummary.textContent = t('reserve.previewHint');
      return;
    }

    const start = new Date(checkin);
    const end = new Date(checkout);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
      reservePreviewSummary.textContent = t('reserve.previewInvalidDates');
      return;
    }

    reservePreviewSummary.textContent = t('reserve.previewLoading');

    try {
      const params = new URLSearchParams({ checkin, checkout, apartment: apartment || '' });
      const response = await fetch(`/api/apartments/occupancy-preview?${params.toString()}`);
      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || t('common.requestFailed'));
      }

      const previewList = Array.isArray(payload.preview) ? payload.preview : [];
      const firstAvailable = previewList.find((item) => item.available);

      if (!firstAvailable) {
        reservePreviewSummary.textContent = t('reserve.previewNone');
        return;
      }

      const summary = t('reserve.previewSummary', {
        available: payload.available,
        total: payload.total,
      });
      const topLine = t('reserve.previewTop', {
        name: firstAvailable.name,
        city: firstAvailable.city,
        price: formatMoney(firstAvailable.pricePerNight),
      });
      reservePreviewSummary.textContent = `${summary} ${topLine}`;
    } catch (error) {
      reservePreviewSummary.textContent = t('reserve.previewError', { message: error.message });
    }
  }

  ['checkin', 'checkout', 'apartment'].forEach((field) => {
    const input = reserveForm.elements[field];
    if (!input) return;
    input.addEventListener('change', refreshReservePreview);
  });

  reserveForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const out = document.getElementById('reserveOutput');
    out.textContent = t('reserve.sending');
    try {
      const body = formDataToObject(reserveForm);
      const data = await postJson('/api/reserve-apartment', body);
      out.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      out.textContent = `${t('common.errorPrefix')}: ${error.message}`;
    }
  });

  refreshReservePreview();
}

const checkinForm = document.getElementById('checkinForm');
if (checkinForm) {
  checkinForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const out = document.getElementById('checkinOutput');
    out.textContent = t('reserve.processing');
    try {
      const body = formDataToObject(checkinForm);
      const data = await postJson('/api/guest/checkin', body);
      out.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      out.textContent = `${t('common.errorPrefix')}: ${error.message}`;
    }
  });
}

const carListingsContainer = document.getElementById('carListings');
if (carListingsContainer) {
  const carSearchForm = document.getElementById('carSearchForm');
  const carResultsTitle = document.getElementById('carResultsTitle');
  const carResultsSummary = document.getElementById('carResultsSummary');

  const CAR_CATALOG = [
    {
      id: 'car-1',
      name: 'City Compact',
      imageUrl: 'https://picsum.photos/seed/car1/800/560',
      carType: 'economy',
      seats: 4,
      transmission: 'Manual',
      fuel: 'Benzin',
      pricePerDay: 39,
      rating: 8.7,
      reviewCount: 133,
      imageLabel: 'Prakticni gradski model',
      perks: ['Neogranicena kilometraza', 'Klima uredaj', 'Bluetooth'],
      description: 'Idealan za gradsku voznju i kratke izlete.',
    },
    {
      id: 'car-2',
      name: 'Coastal SUV',
      imageUrl: 'https://picsum.photos/seed/car2/800/560',
      carType: 'suv',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Dizel',
      pricePerDay: 67,
      rating: 9.0,
      reviewCount: 101,
      imageLabel: 'Komfor za duge relacije',
      perks: ['Veliki prtljaznik', 'Kasko ukljucen', 'Tempomat'],
      description: 'Udoban SUV za obitelji i duza putovanja.',
    },
    {
      id: 'car-3',
      name: 'Premium Sedan',
      imageUrl: 'https://picsum.photos/seed/car3/800/560',
      carType: 'compact',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hibrid',
      pricePerDay: 82,
      rating: 9.3,
      reviewCount: 86,
      imageLabel: 'Poslovni i premium dojam',
      perks: ['Navigacija', 'Parking senzori', 'Priority podrska'],
      description: 'Elegantna limuzina za udobnu i tihu voznju.',
    },
  ];

  const carState = {
    bookings: [],
  };

  function formatMoney(amount) {
    return new Intl.NumberFormat(t('common.locale'), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  }

  function diffDays(pickup, dropoff) {
    const start = new Date(pickup);
    const end = new Date(dropoff);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) return 0;
    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  }

  function bookingOverlaps(booking, pickup, dropoff) {
    const requestedStart = new Date(pickup);
    const requestedEnd = new Date(dropoff);
    const bookingStart = new Date(booking.pickup);
    const bookingEnd = new Date(booking.dropoff);
    return requestedStart < bookingEnd && requestedEnd > bookingStart;
  }

  function setDefaultCarDates() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const dayAfter = new Date(now);
    dayAfter.setDate(now.getDate() + 3);
    carSearchForm.elements.pickup.value = formatDate(tomorrow);
    carSearchForm.elements.dropoff.value = formatDate(dayAfter);
  }

  function collectCarFilters() {
    const formData = new FormData(carSearchForm);
    return {
      location: String(formData.get('location') || 'Zagreb'),
      pickup: String(formData.get('pickup') || ''),
      dropoff: String(formData.get('dropoff') || ''),
      drivers: Number(formData.get('drivers') || 1),
    };
  }

  function isVehicleAvailable(vehicle, filters) {
    if (!filters.pickup || !filters.dropoff) return true;
    return !carState.bookings.some((booking) => {
      if (booking.carType !== vehicle.carType) return false;
      if (booking.location !== filters.location) return false;
      return bookingOverlaps(booking, filters.pickup, filters.dropoff);
    });
  }

  function createCarBookingForm(vehicle, filters) {
    const wrapper = document.createElement('div');
    wrapper.className = 'listing-booking-box';

    const form = document.createElement('form');
    form.className = 'apt-book-form';
    form.innerHTML = `
      <label>${t('car.form.name')}<input name="name" required></label>
      <label>${t('car.form.email')}<input name="email" type="email" required></label>
      <label>${t('car.form.pickup')}<input name="pickup" type="date" value="${filters.pickup}" required></label>
      <label>${t('car.form.dropoff')}<input name="dropoff" type="date" value="${filters.dropoff}" required></label>
      <input type="hidden" name="carType" value="${vehicle.carType}">
      <input type="hidden" name="location" value="${filters.location}">
      <label>${t('car.form.location')}<input value="${filters.location}" readonly></label>
      <label>${t('car.form.vehicleType')}<input value="${vehicle.name}" readonly></label>
      <button type="submit" class="btn">${t('car.form.confirm')}</button>
      <pre class="apt-output"></pre>
    `;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const out = form.querySelector('.apt-output');
      out.textContent = t('car.sending');
      try {
        const body = formDataToObject(form);
        const payload = await postJson('/api/rentacar/book', body);
        out.textContent = t('car.reservationSuccess', { id: payload.reservation.id });
        await loadCarBookings();
        renderCars();
      } catch (error) {
        out.textContent = `${t('common.errorPrefix')}: ${error.message}`;
      }
    });

    wrapper.appendChild(form);
    return wrapper;
  }

  function buildVehicleCard(vehicle, filters, days) {
    const available = isVehicleAvailable(vehicle, filters);
    const totalPrice = days > 0 ? vehicle.pricePerDay * days : vehicle.pricePerDay;

    const card = document.createElement('article');
    card.className = 'listing-card card-plain fade-up';
    card.innerHTML = `
      <div class="listing-image car-image" aria-hidden="true">
        <img class="listing-photo" src="${vehicle.imageUrl || ''}" alt="" loading="lazy" onerror="this.style.display='none'">
        <span>${vehicle.imageLabel}</span>
      </div>
      <div class="listing-main">
        <p class="listing-location">${filters.location} • ${vehicle.transmission} • ${vehicle.fuel}</p>
        <h3>${vehicle.name}</h3>
        <p class="listing-description">${vehicle.description}</p>
        <p class="listing-perks">${vehicle.perks.join(' • ')}</p>
        <p class="listing-type">${t('car.seatsCategory', { count: vehicle.seats, type: vehicle.carType.toUpperCase() })}</p>
      </div>
      <div class="listing-side">
        <div class="listing-rating-wrap">
          <strong>${t('car.rating', { rating: vehicle.rating })}</strong>
          <span>${t('car.reviews', { count: vehicle.reviewCount })}</span>
        </div>
        <div class="listing-price-wrap">
          <p class="listing-status ${available ? 'ok' : 'bad'}">${available ? t('car.available') : t('car.unavailableDates')}</p>
          <p class="listing-total">${formatMoney(totalPrice)}</p>
          <p class="muted">${days > 0 ? t('car.days', { count: days }) : t('car.pricePerDay')} • ${formatMoney(vehicle.pricePerDay)} ${t('car.perDaySuffix')}</p>
        </div>
        <button class="btn open-booking-btn" ${available ? '' : 'disabled'}>
          ${available ? t('car.book') : t('car.notAvailable')}
        </button>
      </div>
    `;

    if (available) {
      const toggleButton = card.querySelector('.open-booking-btn');
      const bookingBox = createCarBookingForm(vehicle, filters);
      bookingBox.hidden = true;
      card.appendChild(bookingBox);
      toggleButton.addEventListener('click', () => {
        bookingBox.hidden = !bookingBox.hidden;
        toggleButton.textContent = bookingBox.hidden ? t('car.book') : t('car.hideForm');
      });
    }

    return { card, available };
  }

  async function loadCarBookings() {
    const response = await fetch('/api/rentacar/bookings');
    const payload = await response.json();
    carState.bookings = payload.bookings || [];
  }

  function renderCars() {
    const filters = collectCarFilters();
    const days = diffDays(filters.pickup, filters.dropoff);

    if (filters.pickup && filters.dropoff && days <= 0) {
      carListingsContainer.innerHTML = `<p class="card-plain">${t('car.invalidDates')}</p>`;
      carResultsTitle.textContent = t('car.zeroResults');
      carResultsSummary.textContent = t('car.fixDates');
      return;
    }

    carListingsContainer.innerHTML = '';
    let availableCount = 0;

    const sortedVehicles = [...CAR_CATALOG].sort((a, b) => a.pricePerDay - b.pricePerDay);
    sortedVehicles.forEach((vehicle) => {
      const { card, available } = buildVehicleCard(vehicle, filters, days);
      if (available) availableCount += 1;
      carListingsContainer.appendChild(card);
    });

    carResultsTitle.textContent = t('car.foundResults', { count: CAR_CATALOG.length });
    carResultsSummary.textContent = t('car.summary', { available: availableCount, location: filters.location });
  }

  if (carSearchForm) {
    setDefaultCarDates();
    carSearchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      renderCars();
    });
  }

  (async () => {
    carListingsContainer.textContent = t('common.loadingVehicles');
    try {
      await loadCarBookings();
      renderCars();
    } catch (error) {
      carListingsContainer.textContent = `${t('common.errorPrefix')}: ${error.message}`;
    }
  })();
}

const apartmentsContainer = document.getElementById('apartmentsList');
if (apartmentsContainer) {
  const searchForm = document.getElementById('apartmentsSearchForm');
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsSummary = document.getElementById('resultsSummary');

  const state = {
    apartments: [],
    bookingsById: {},
  };

  function formatMoney(amount) {
    return new Intl.NumberFormat(t('common.locale'), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  }

  function diffNights(checkin, checkout) {
    const start = new Date(checkin);
    const end = new Date(checkout);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) return 0;
    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  }

  function dateRangeOverlaps(booking, checkin, checkout) {
    const requestedStart = new Date(checkin);
    const requestedEnd = new Date(checkout);
    const bookingStart = new Date(booking.checkin);
    const bookingEnd = new Date(booking.checkout);
    return requestedStart < bookingEnd && requestedEnd > bookingStart;
  }

  function isAvailable(aptId, checkin, checkout) {
    const bookings = state.bookingsById[aptId] || [];
    return !bookings.some((booking) => dateRangeOverlaps(booking, checkin, checkout));
  }

  function collectSearchFilters() {
    const formData = new FormData(searchForm);
    return {
      destination: String(formData.get('destination') || '').trim().toLowerCase(),
      checkin: String(formData.get('checkin') || ''),
      checkout: String(formData.get('checkout') || ''),
      guests: Number(formData.get('guests') || 1),
    };
  }

  function setDefaultSearchDates() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const dayAfter = new Date(now);
    dayAfter.setDate(now.getDate() + 4);
    searchForm.elements.checkin.value = formatDate(tomorrow);
    searchForm.elements.checkout.value = formatDate(dayAfter);
  }

  function createBookingForm(apt, filters) {
    const wrapper = document.createElement('div');
    wrapper.className = 'listing-booking-box';

    const form = document.createElement('form');
    form.className = 'apt-book-form';
    form.innerHTML = `
      <label>${t('apartments.form.name')}<input name="name" required></label>
      <label>${t('apartments.form.email')}<input name="email" type="email" required></label>
      <label>${t('apartments.form.checkin')}<input name="checkin" type="date" value="${filters.checkin}" required></label>
      <label>${t('apartments.form.checkout')}<input name="checkout" type="date" value="${filters.checkout}" required></label>
      <label>${t('apartments.form.guests')}<input name="guests" type="number" min="1" value="${filters.guests || 1}" required></label>
      <label class="check-line"><input type="checkbox" name="evisitor" value="1" checked>${t('apartments.form.evisitor')}</label>
      <button type="submit" class="btn">${t('apartments.form.confirm')}</button>
      <pre class="apt-output"></pre>
    `;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const out = form.querySelector('.apt-output');
      out.textContent = t('apartments.sending');
      try {
        const body = formDataToObject(form);
        const payload = await postJson(`/api/apartments/${apt.id}/book`, body);
        out.textContent = t('apartments.reservationSuccess', { id: payload.booking.id });
        await loadApartmentsData();
        renderApartments();
      } catch (error) {
        out.textContent = `${t('common.errorPrefix')}: ${error.message}`;
      }
    });

    wrapper.appendChild(form);
    return wrapper;
  }

  function buildListingCard(apt, filters, nights) {
    const card = document.createElement('article');
    card.className = 'listing-card card-plain fade-up';

    const available = isAvailable(apt.id, filters.checkin, filters.checkout);
    const totalPrice = nights > 0 ? apt.pricePerNight * nights : apt.pricePerNight;
    const perksText = (apt.perks || []).join(' • ');

    card.innerHTML = `
      <div class="listing-image" aria-hidden="true">
        <img class="listing-photo" src="${apt.imageUrl || ''}" alt="" loading="lazy" onerror="this.style.display='none'">
        <span>${apt.imageLabel || 'Smjestaj'}</span>
      </div>
      <div class="listing-main">
        <p class="listing-location">${apt.city} • ${apt.distanceKm || '-'} km do centra</p>
        <h3>${apt.name}</h3>
        <p class="listing-description">${apt.description || ''}</p>
        <p class="listing-perks">${perksText}</p>
        <p class="listing-type">${t('apartments.type', { type: apt.type })}</p>
      </div>
      <div class="listing-side">
        <div class="listing-rating-wrap">
          <strong>${t('apartments.rating', { rating: apt.rating || '-' })}</strong>
          <span>${t('apartments.reviews', { count: apt.reviewCount || 0 })}</span>
        </div>
        <div class="listing-price-wrap">
          <p class="listing-status ${available ? 'ok' : 'bad'}">${available ? t('apartments.available') : t('apartments.unavailableDates')}</p>
          <p class="listing-total">${formatMoney(totalPrice)}</p>
          <p class="muted">${nights > 0 ? t('apartments.nights', { count: nights }) : t('apartments.pricePerNight')} • ${formatMoney(apt.pricePerNight)} ${t('apartments.perNightSuffix')}</p>
        </div>
        <button class="btn open-booking-btn" ${available ? '' : 'disabled'}>
          ${available ? t('apartments.bookNow') : t('apartments.notAvailable')}
        </button>
      </div>
    `;

    if (available) {
      const toggleButton = card.querySelector('.open-booking-btn');
      const bookingBox = createBookingForm(apt, filters);
      bookingBox.hidden = true;
      card.appendChild(bookingBox);
      toggleButton.addEventListener('click', () => {
        bookingBox.hidden = !bookingBox.hidden;
        toggleButton.textContent = bookingBox.hidden ? t('apartments.bookNow') : t('apartments.hideForm');
      });
    }

    return { card, available };
  }

  async function loadApartmentsData() {
    const response = await fetch('/api/apartments');
    const payload = await response.json();
    const apartments = payload.apartments || [];

    const bookingsEntries = await Promise.all(
      apartments.map(async (apt) => {
        const bookingsResponse = await fetch(`/api/apartments/${apt.id}/bookings`);
        const bookingsPayload = await bookingsResponse.json();
        return [apt.id, bookingsPayload.bookings || []];
      })
    );

    state.apartments = apartments;
    state.bookingsById = Object.fromEntries(bookingsEntries);
  }

  function renderApartments() {
    const filters = collectSearchFilters();
    const nights = diffNights(filters.checkin, filters.checkout);

    if (filters.checkin && filters.checkout && nights <= 0) {
      apartmentsContainer.innerHTML = `<p class="card-plain">${t('apartments.invalidDates')}</p>`;
      resultsTitle.textContent = t('apartments.zeroResults');
      resultsSummary.textContent = t('apartments.fixDates');
      return;
    }

    const filtered = state.apartments
      .filter((apt) => {
        if (!filters.destination) return true;
        const cityMatch = String(apt.city || '').toLowerCase().includes(filters.destination);
        const nameMatch = String(apt.name || '').toLowerCase().includes(filters.destination);
        return cityMatch || nameMatch;
      })
      .map((apt) => {
        const available = filters.checkin && filters.checkout ? isAvailable(apt.id, filters.checkin, filters.checkout) : true;
        return { apt, available };
      })
      .sort((a, b) => Number(b.available) - Number(a.available) || a.apt.pricePerNight - b.apt.pricePerNight);

    apartmentsContainer.innerHTML = '';
    let availableCount = 0;

    filtered.forEach(({ apt }) => {
      const { card, available } = buildListingCard(apt, filters, nights);
      if (available) availableCount += 1;
      apartmentsContainer.appendChild(card);
    });

    if (!filtered.length) {
      apartmentsContainer.innerHTML = `<p class="card-plain">${t('apartments.noResults')}</p>`;
    }

    resultsTitle.textContent = t('apartments.foundResults', { count: filtered.length });
    resultsSummary.textContent = t('apartments.summary', { available: availableCount, guests: filters.guests });
  }

  if (searchForm) {
    setDefaultSearchDates();
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      renderApartments();
    });
  }

  (async () => {
    apartmentsContainer.textContent = t('common.loadingApartments');
    try {
      await loadApartmentsData();
      renderApartments();
    } catch (error) {
      apartmentsContainer.textContent = `${t('common.errorPrefix')}: ${error.message}`;
    }
  })();
}
