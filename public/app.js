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
    'nav.proposal': 'Prijedlog suradnje',
    'nav.about': 'O nama',
    'title.home': 'Mljet4You',
    'title.apartments': 'Smjestaj - Mljet4You',
    'title.apartmentDetails': 'Detalji apartmana - Mljet4You',
    'title.rentacar': 'Rent a car - Mljet4You',
    'title.reserve': 'Online check-in i rezervacija - Mljet4You',
    'title.activities': 'Aktivnosti - Mljet4You',
    'title.faq': 'FAQ i info guide - Mljet4You',
    'title.directions': 'Kako do nas - Mljet4You',
    'title.proposal': 'Prijedlog suradnje - Mljet4You',
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
    'rentacar.introTitle': 'Rent a car kategorije',
    'rentacar.introText': 'Odaberi lokaciju i termine te rezerviraj kategoriju vozila uz sezonske cijene.',
    'rentacar.pickupLocation': 'Nacin preuzimanja',
    'rentacar.pickupAtOffice': 'At office location',
    'rentacar.pickupDelivery': 'Delivery',
    'rentacar.deliveryNotice': 'U slucaju odabira delivery opcije, dodatne cijene dostave mogu biti ukljucene.',
    'rentacar.pickupDate': 'Datum preuzimanja',
    'rentacar.dropoffDate': 'Datum povrata',
    'rentacar.openCalendar': 'Otvori kalendar',
    'rentacar.rangePlaceholder': 'Odaberi raspon datuma',
    'rentacar.drivers': 'Vozaca',
    'rentacar.available': 'Dostupne kategorije',
    'rentacar.dateSelection': 'Selekcija datuma',
    'rentacar.basePriceCaption': 'Osnovna cijena za odabrane datume',
    'rentacar.basePriceNotice': 'Prikazane su osnovne cijene za odabrane datume. Mogući popusti nisu uključeni u osnovnu cijenu.',
    'rentacar.zoneTitle': 'Zona preuzimanja i dostave',
    'rentacar.zoneText': 'Bazna lokacija je prikazana na mapi, s oznacenim radijusom usluge od 5 km.',
    'rentacar.deliveryOutsideNotice': 'Dostava izvan oznacenog radijusa od 5 km dodatno se naplacuje.',
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
    'trust.uhpaText': 'Mljet4You d.o.o. je clan UHPA-e (Udruga hrvatskih putnickih agencija).',
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
    'car.form.total': 'Ukupna cijena',
    'car.form.deliveryNotice': 'Napomena: delivery moze ukljucivati dodatne troskove dostave.',
    'car.form.confirm': 'Potvrdi rezervaciju vozila',
    'car.previewOnly': 'Mail nije poslan. Prikazan je samo preview poruke.',
    'car.mailPreview.title': 'Preview confirmation maila',
    'car.mailPreview.subtitle': 'Ovako bi izgledala poruka nakon slanja upita.',
    'car.mailPreview.close': 'Zatvori',
    'car.mailPreview.subject': 'Naslov',
    'car.mailPreview.to': 'Prima',
    'car.mailPreview.body': 'Sadrzaj poruke',
    'car.mailPreview.subjectValue': 'Mljet4You rent a car upit - {vehicle}',
    'car.mailPreview.greeting': 'Pozdrav {name},',
    'car.mailPreview.line1': 'zaprimili smo vas upit za kategoriju vozila {vehicle}.',
    'car.mailPreview.line2': 'Termin najma: {pickup} do {dropoff} ({days} dana).',
    'car.mailPreview.line3': 'Nacin preuzimanja: {location}.',
    'car.mailPreview.line4': 'Procijenjena cijena: {total} ({perDay} po danu).',
    'car.mailPreview.line5': 'Delivery opcija moze ukljucivati dodatne troskove dostave.',
    'car.mailPreview.line6': 'Javit cemo vam se uskoro s finalnom potvrdom i detaljima preuzimanja.',
    'car.sending': 'Slanje rezervacije vozila...',
    'car.reservationSuccess': 'Rezervacija uspjesna: {id}',
    'car.rating': 'Ocjena {rating}',
    'car.reviews': '{count} recenzija',
    'car.seatsCategory': '{count} sjedala • Kategorija: {type}',
    'car.luggage': '{count} kom. prtljage',
    'car.seasonLabel': 'Sezona',
    'car.tariffLabel': 'Tarifa',
    'car.tierShort': '1-3 dana',
    'car.tierMid': '4-6 dana',
    'car.tierLong': '7+ dana',
    'car.seasonLow': 'Niska (sij-trav, stu-pro)',
    'car.seasonShoulder': 'Pred/Posezona (svi, lis)',
    'car.seasonWarm': 'Topla (lip, ruj)',
    'car.seasonHigh': 'Visoka (srp, kol)',
    'car.seasonRates': 'Cjenik 1-3 / 4-6 / 7+ dana',
    'car.available': 'Dostupno',
    'car.unavailableDates': 'Nedostupno za odabrane datume',
    'car.days': '{count} dana',
    'car.pricePerDay': 'Cijena po danu',
    'car.priceForDates': 'Cijena za odabrane datume: {pickup} - {dropoff}',
    'car.totalForDates': 'Ukupna cijena za odabrane datume: {total}',
    'car.perDaySuffix': '/ dan',
    'car.book': 'Rezerviraj vozilo',
    'car.hideForm': 'Sakrij formu',
    'car.notAvailable': 'Trenutno nedostupno',
    'car.invalidDates': 'Datum povrata mora biti nakon datuma preuzimanja.',
    'car.zeroResults': 'Pronadeno 0 vozila',
    'car.fixDates': 'Ispravite datume i pokusajte ponovno.',
    'car.foundResults': 'Pronadeno {count} kategorija',
    'car.summary': '{available} dostupnih kategorija za odabrani termin.',
    'car.orSimilar': 'ili slično',
    'car.services': 'Usluge',
    'car.freeShuttle': 'Besplatna dostava',
    'car.unlimitedMileage': 'Neograničena kilometraža',
    'car.fuelPolicy': 'Gorivo: Full/Full',
    'car.includes': 'Uključeno',
    'car.freeCancellation': 'BESPLATNE otkazivanja',
    'car.theftProtection': 'Zaštita od krađe',
    'car.freeAmendments': 'BESPLATNE izmjene',
    'car.fullInsurance': 'Potpuno osiguranje',
    'car.tariffHint': 'Klikni za puni cjenik',
    'car.viewDeal': 'Rezerviraj vozilo',
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
    'apartments.viewDetails': 'Detalji',
    'apartments.backToList': '← Natrag na listu apartmana',
    'apartmentDetails.title': 'Detalji apartmana',
    'apartmentDetails.subtitle': 'Pregled fotografija, sadržaja i brza rezervacija.',
    'apartmentDetails.notFound': 'Apartman nije pronađen.',
    'apartmentDetails.locationDistance': '{city} • {distance} km do centra',
    'apartmentDetails.reserveTitle': 'Brza rezervacija',
    'apartmentDetails.currentOccupancy': 'Trenutno aktivne rezervacije: {count}',
  },
  en: {
    'nav.apartments': 'Accommodation',
    'nav.rentacar': 'Rent a car',
    'nav.activities': 'Activities',
    'nav.faq': 'FAQ and info guide',
    'nav.directions': 'How to reach us',
    'nav.proposal': 'Project proposal',
    'nav.about': 'About us',
    'title.home': 'Mljet4You',
    'title.apartments': 'Accommodation - Mljet4You',
    'title.apartmentDetails': 'Apartment details - Mljet4You',
    'title.rentacar': 'Rent a car - Mljet4You',
    'title.reserve': 'Online check-in and reservation - Mljet4You',
    'title.activities': 'Activities - Mljet4You',
    'title.faq': 'FAQ and info guide - Mljet4You',
    'title.directions': 'How to reach us - Mljet4You',
    'title.proposal': 'Project proposal - Mljet4You',
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
    'rentacar.introTitle': 'Rent-a-car categories',
    'rentacar.introText': 'Choose location and dates, then reserve a vehicle category with seasonal pricing.',
    'rentacar.pickupLocation': 'Pickup method',
    'rentacar.pickupAtOffice': 'At office location',
    'rentacar.pickupDelivery': 'Delivery',
    'rentacar.deliveryNotice': 'If delivery is selected, additional delivery charges may apply.',
    'rentacar.pickupDate': 'Pickup date',
    'rentacar.dropoffDate': 'Drop-off date',
    'rentacar.openCalendar': 'Open calendar',
    'rentacar.rangePlaceholder': 'Select date range',
    'rentacar.drivers': 'Drivers',
    'rentacar.available': 'Available categories',
    'rentacar.dateSelection': 'Date selection',
    'rentacar.basePriceCaption': 'Base price for selected dates',
    'rentacar.basePriceNotice': 'Displayed prices are base prices for selected dates. Possible discounts are not included in the base price.',
    'rentacar.zoneTitle': 'Pickup and delivery zone',
    'rentacar.zoneText': 'The base location is shown on the map with a marked 5 km service radius.',
    'rentacar.deliveryOutsideNotice': 'Delivery outside the marked 5 km radius is charged additionally.',
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
    'trust.uhpaText': 'Mljet4You d.o.o. is a member of UHPA (Association of Croatian travel agencies).',
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
    'car.form.total': 'Total price',
    'car.form.deliveryNotice': 'Note: delivery may include additional delivery charges.',
    'car.form.confirm': 'Confirm vehicle reservation',
    'car.previewOnly': 'No email was sent. This is only a message preview.',
    'car.mailPreview.title': 'Confirmation email preview',
    'car.mailPreview.subtitle': 'This is how the message would look after sending the inquiry.',
    'car.mailPreview.close': 'Close',
    'car.mailPreview.subject': 'Subject',
    'car.mailPreview.to': 'To',
    'car.mailPreview.body': 'Message body',
    'car.mailPreview.subjectValue': 'Mljet4You rent a car inquiry - {vehicle}',
    'car.mailPreview.greeting': 'Hello {name},',
    'car.mailPreview.line1': 'we have received your inquiry for the {vehicle} vehicle category.',
    'car.mailPreview.line2': 'Rental period: {pickup} to {dropoff} ({days} days).',
    'car.mailPreview.line3': 'Pickup method: {location}.',
    'car.mailPreview.line4': 'Estimated price: {total} ({perDay} per day).',
    'car.mailPreview.line5': 'Delivery may include additional delivery charges.',
    'car.mailPreview.line6': 'We will contact you soon with final confirmation and pickup details.',
    'car.sending': 'Sending vehicle reservation...',
    'car.reservationSuccess': 'Reservation successful: {id}',
    'car.rating': 'Rating {rating}',
    'car.reviews': '{count} reviews',
    'car.seatsCategory': '{count} seats • Category: {type}',
    'car.luggage': '{count} luggage',
    'car.seasonLabel': 'Season',
    'car.tariffLabel': 'Tariff',
    'car.tierShort': '1-3 days',
    'car.tierMid': '4-6 days',
    'car.tierLong': '7+ days',
    'car.seasonLow': 'Low (Jan-Apr, Nov-Dec)',
    'car.seasonShoulder': 'Shoulder (May, Oct)',
    'car.seasonWarm': 'Warm (Jun, Sep)',
    'car.seasonHigh': 'High (Jul, Aug)',
    'car.seasonRates': 'Rate card 1-3 / 4-6 / 7+ days',
    'car.available': 'Available',
    'car.unavailableDates': 'Unavailable for selected dates',
    'car.days': '{count} days',
    'car.pricePerDay': 'Price per day',
    'car.priceForDates': 'Price for selected dates: {pickup} - {dropoff}',
    'car.totalForDates': 'Total price for selected dates: {total}',
    'car.perDaySuffix': '/ day',
    'car.book': 'Reserve vehicle',
    'car.hideForm': 'Hide form',
    'car.notAvailable': 'Currently unavailable',
    'car.invalidDates': 'Drop-off date must be after pickup date.',
    'car.zeroResults': 'Found 0 vehicles',
    'car.fixDates': 'Please correct the dates and try again.',
    'car.foundResults': 'Found {count} categories',
    'car.summary': '{available} categories available for the selected period.',
    'car.orSimilar': 'or similar',
    'car.services': 'Services',
    'car.freeShuttle': 'Free Shuttle',
    'car.unlimitedMileage': 'Unlimited Mileage',
    'car.fuelPolicy': 'Fuel: Full/Full',
    'car.includes': 'Includes',
    'car.freeCancellation': 'FREE Cancellation',
    'car.theftProtection': 'Theft Protection',
    'car.freeAmendments': 'FREE Amendments',
    'car.fullInsurance': 'Full Insurance',
    'car.tariffHint': 'Click to see full pricing',
    'car.viewDeal': 'View deal',
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
    'apartments.viewDetails': 'Details',
    'apartments.backToList': '← Back to apartments list',
    'apartmentDetails.title': 'Apartment details',
    'apartmentDetails.subtitle': 'Photos, amenities, and quick reservation form.',
    'apartmentDetails.notFound': 'Apartment not found.',
    'apartmentDetails.locationDistance': '{city} • {distance} km from center',
    'apartmentDetails.reserveTitle': 'Quick reservation',
    'apartmentDetails.currentOccupancy': 'Current active reservations: {count}',
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
  const carDeliveryNotice = document.getElementById('carDeliveryNotice');
  const carGlobalRange = document.getElementById('carGlobalRange');
  const carRangeButton = document.getElementById('carRangeButton');
  const carGlobalPickup = document.getElementById('carGlobalPickup');
  const carGlobalDropoff = document.getElementById('carGlobalDropoff');
  const rentacarMap = document.getElementById('rentacarMap');
  const carCardsById = new Map();
  let carCardsRendered = false;
  let carRangePicker = null;

  const CAR_CATALOG = [
    {
      id: 'car-1',
      name: 'Mini',
      imageUrl: '/assets/images/rentacar/mini-smart.png',
      carType: 'mini',
      seats: 4,
      doors: 5,
      ac: true,
      transmission: 'Manual',
      fuel: 'Benzin',
      luggage: 1,
      rating: 8.8,
      reviewCount: 133,
      imageLabel: 'Mini kategorija',
      perks: ['Neogranicena kilometraza', 'Klima uredaj', 'Bluetooth'],
      description: 'Najpovoljnija opcija za gradske voznje i kratke relacije.',
      seasonalRates: {
        low: { short: 40, mid: 35, long: 30 },
        shoulder: { short: 45, mid: 40, long: 35 },
        warm: { short: 55, mid: 50, long: 45 },
        high: { short: 75, mid: 70, long: 65 },
      },
    },
    {
      id: 'car-2',
      name: 'Small',
      imageUrl: '/assets/images/rentacar/small-fiat-500-red.png',
      carType: 'small',
      seats: 5,
      doors: 5,
      ac: true,
      transmission: 'Manual / Automatic',
      fuel: 'Benzin',
      luggage: 2,
      rating: 9.0,
      reviewCount: 101,
      imageLabel: 'Small kategorija',
      perks: ['Jednostavno parkiranje', 'Klima uredaj', 'Niska potrosnja'],
      description: 'Dobra ravnoteza cijene i udobnosti za dnevne ture po otoku.',
      seasonalRates: {
        low: { short: 50, mid: 45, long: 40 },
        shoulder: { short: 55, mid: 50, long: 45 },
        warm: { short: 65, mid: 60, long: 55 },
        high: { short: 80, mid: 75, long: 70 },
      },
    },
    {
      id: 'car-3',
      name: 'Medium',
      imageUrl: '/assets/images/rentacar/medium-ds4.png',
      carType: 'medium',
      seats: 5,
      doors: 5,
      ac: true,
      transmission: 'Automatic',
      fuel: 'Dizel / Hibrid',
      luggage: 3,
      rating: 9.3,
      reviewCount: 86,
      imageLabel: 'Medium kategorija',
      perks: ['Prostrana unutrasnjost', 'Navigacija', 'Parking senzori'],
      description: 'Obiteljska kategorija za duze voznje i vise prtljage.',
      seasonalRates: {
        low: { short: 60, mid: 55, long: 50 },
        shoulder: { short: 65, mid: 60, long: 55 },
        warm: { short: 75, mid: 70, long: 65 },
        high: { short: 95, mid: 90, long: 85 },
      },
    },
    {
      id: 'car-4',
      name: 'Comfort',
      imageUrl: '/assets/images/rentacar/comfort-bmw.png',
      carType: 'comfort',
      seats: 5,
      doors: 5,
      ac: true,
      transmission: 'Automatic',
      fuel: 'Dizel / Hibrid',
      luggage: 4,
      rating: 9.4,
      reviewCount: 72,
      imageLabel: 'Comfort kategorija',
      perks: ['Veca udobnost', 'Napredni sigurnosni paket', 'Prioritetna podrska'],
      description: 'Visa klasa udobnosti za goste koji traze dodatni komfor.',
      seasonalRates: {
        low: { short: 70, mid: 65, long: 60 },
        shoulder: { short: 75, mid: 70, long: 65 },
        warm: { short: 85, mid: 80, long: 75 },
        high: { short: 105, mid: 100, long: 95 },
      },
    },
    {
      id: 'car-5',
      name: 'Premium',
      imageUrl: '/assets/images/rentacar/premium-vw-arteon.png',
      carType: 'premium',
      seats: 5,
      doors: 5,
      ac: true,
      transmission: 'Automatic',
      fuel: 'Hibrid / Electric',
      luggage: 4,
      rating: 9.5,
      reviewCount: 58,
      imageLabel: 'Premium kategorija',
      perks: ['Top oprema', 'Mogucnost full osiguranja', 'VIP preuzimanje'],
      description: 'Najvisa kategorija za maksimalnu udobnost i premium iskustvo.',
      seasonalRates: {
        low: { short: 90, mid: 85, long: 80 },
        shoulder: { short: 100, mid: 95, long: 90 },
        warm: { short: 120, mid: 115, long: 110 },
        high: { short: 150, mid: 140, long: 130 },
      },
    },
  ];

  function formatMoney(amount) {
    return new Intl.NumberFormat(t('common.locale'), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  }

  function formatDisplayDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(t('common.monthLocale'), { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
  }

  function diffDays(pickup, dropoff) {
    const start = new Date(pickup);
    const end = new Date(dropoff);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) return 0;
    return Math.round((end - start) / (1000 * 60 * 60 * 24));
  }

  function getCarSeasonKey(pickup) {
    const date = new Date(pickup);
    const month = Number.isNaN(date.getTime()) ? 6 : date.getMonth() + 1;
    return getCarSeasonKeyByMonth(month);
  }

  function getCarSeasonKeyByMonth(month) {
    if (month === 7 || month === 8) return 'high';
    if (month === 6 || month === 9) return 'warm';
    if (month === 5 || month === 10) return 'shoulder';
    return 'low';
  }

  function getSeasonKeysForRange(pickup, dropoff) {
    const start = new Date(pickup);
    const end = new Date(dropoff);
    const seasonKeys = new Set();

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
      seasonKeys.add(getCarSeasonKey(pickup));
      return seasonKeys;
    }

    const cursor = new Date(start);
    let guard = 0;
    while (cursor < end && guard < 731) {
      seasonKeys.add(getCarSeasonKeyByMonth(cursor.getMonth() + 1));
      cursor.setDate(cursor.getDate() + 1);
      guard += 1;
    }

    if (!seasonKeys.size) {
      seasonKeys.add(getCarSeasonKey(pickup));
    }

    return seasonKeys;
  }

  function getCarTierKey(days) {
    if (days <= 3) return 'short';
    if (days <= 6) return 'mid';
    return 'long';
  }

  function getSeasonLabelKey(seasonKey) {
    if (seasonKey === 'high') return 'car.seasonHigh';
    if (seasonKey === 'warm') return 'car.seasonWarm';
    if (seasonKey === 'shoulder') return 'car.seasonShoulder';
    return 'car.seasonLow';
  }

  function getTierLabelKey(tierKey) {
    if (tierKey === 'long') return 'car.tierLong';
    if (tierKey === 'mid') return 'car.tierMid';
    return 'car.tierShort';
  }

  function getCarPricing(vehicle, pickup, days) {
    const seasonKey = getCarSeasonKey(pickup);
    const tierKey = getCarTierKey(days || 1);
    const seasonRates = vehicle.seasonalRates[seasonKey] || vehicle.seasonalRates.warm;
    return {
      seasonKey,
      tierKey,
      seasonRates,
      pricePerDay: seasonRates[tierKey],
    };
  }

  function getSelectedDatePriceLabel(filters) {
    return t('car.priceForDates', {
      pickup: formatDisplayDate(filters.pickup),
      dropoff: formatDisplayDate(filters.dropoff),
    });
  }

  function setTariffWrapHeight(wrap) {
    if (!wrap) return;
    wrap.style.maxHeight = `${wrap.scrollHeight}px`;
  }

  function animateTariffWrapHeight(wrap, mutateRows) {
    if (!wrap || typeof mutateRows !== 'function') return;

    const fromHeight = wrap.getBoundingClientRect().height;
    wrap.style.maxHeight = `${fromHeight}px`;
    void wrap.offsetHeight;

    mutateRows();
    const toHeight = wrap.scrollHeight;

    requestAnimationFrame(() => {
      wrap.style.maxHeight = `${toHeight}px`;
    });
  }

  function syncTariffRows(card, seasonKeysInRange, pricingSeasonKey) {
    const wrap = card.querySelector('.car-tariff-table-wrap');
    if (!wrap) return;

    const isExpanded = wrap.dataset.expanded === '1';
    wrap.dataset.inRange = Array.from(seasonKeysInRange).join(',');
    const rows = Array.from(card.querySelectorAll('tbody tr[data-season-key]'));

    animateTariffWrapHeight(wrap, () => {
      rows.forEach((row) => {
        const isInRange = seasonKeysInRange.has(row.dataset.seasonKey);
        row.classList.toggle('active', row.dataset.seasonKey === pricingSeasonKey);
        row.classList.toggle('in-range', isInRange);
        row.hidden = !isExpanded && !isInRange;
      });
    });
  }

  function toggleTariffTable(card) {
    const wrap = card.querySelector('.car-tariff-table-wrap');
    if (!wrap) return;

    const rows = Array.from(card.querySelectorAll('tbody tr[data-season-key]'));
    const inRange = new Set(String(wrap.dataset.inRange || '').split(',').filter(Boolean));
    const wasExpanded = wrap.dataset.expanded === '1';

    animateTariffWrapHeight(wrap, () => {
      if (wasExpanded) {
        rows.forEach((row) => {
          row.hidden = !inRange.has(row.dataset.seasonKey);
        });
        wrap.dataset.expanded = '0';
        wrap.setAttribute('aria-expanded', 'false');
        return;
      }

      rows.forEach((row) => {
        row.hidden = false;
      });
      wrap.dataset.expanded = '1';
      wrap.setAttribute('aria-expanded', 'true');
    });
  }

  function setDefaultCarDates() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const dayAfter = new Date(now);
    dayAfter.setDate(now.getDate() + 3);
    if (carSearchForm) {
      carSearchForm.elements.pickup.value = formatDate(tomorrow);
      carSearchForm.elements.dropoff.value = formatDate(dayAfter);
    }
    if (carGlobalPickup && !carGlobalPickup.value) carGlobalPickup.value = formatDate(tomorrow);
    if (carGlobalDropoff && !carGlobalDropoff.value) carGlobalDropoff.value = formatDate(dayAfter);
  }

  function syncCarRangeInputFromHiddenDates() {
    if (!carGlobalRange) return;
    const pickup = carGlobalPickup?.value;
    const dropoff = carGlobalDropoff?.value;

    if (!pickup || !dropoff) {
      carGlobalRange.value = '';
      return;
    }

    carGlobalRange.value = `${formatDisplayDate(pickup)} - ${formatDisplayDate(dropoff)}`;

    if (carRangePicker) {
      carRangePicker.setDate([pickup, dropoff], false, 'Y-m-d');
    }
  }

  function initCarRangePicker() {
    if (!carGlobalRange || !carGlobalPickup || !carGlobalDropoff) return;
    if (typeof window.flatpickr !== 'function') {
      syncCarRangeInputFromHiddenDates();
      return;
    }

    carRangePicker = window.flatpickr(carGlobalRange, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      minDate: 'today',
      clickOpens: false,
      allowInput: false,
      defaultDate: [carGlobalPickup.value, carGlobalDropoff.value],
      onClose: (selectedDates) => {
        if (!Array.isArray(selectedDates) || selectedDates.length < 2) return;

        const pickup = formatDate(selectedDates[0]);
        const dropoff = formatDate(selectedDates[1]);
        carGlobalPickup.value = pickup;
        carGlobalDropoff.value = dropoff;
        syncCarRangeInputFromHiddenDates();
        renderCars();

        const dateSelectionSection = carResultsTitle?.closest('.results-meta') || carResultsTitle;
        if (dateSelectionSection) {
          requestAnimationFrame(() => {
            dateSelectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      },
    });

    syncCarRangeInputFromHiddenDates();

    if (carRangeButton) {
      carRangeButton.addEventListener('click', () => {
        carRangePicker.open();
      });
    }
  }

  function normalizeCarDateRange(pickupInput, dropoffInput, changedField) {
    if (!pickupInput || !dropoffInput) return false;
    const pickup = pickupInput.value;
    const dropoff = dropoffInput.value;
    if (!pickup || !dropoff) return false;

    const pickupDate = new Date(pickup);
    const dropoffDate = new Date(dropoff);
    if (isNaN(pickupDate.getTime()) || isNaN(dropoffDate.getTime())) return false;

    if (pickupDate >= dropoffDate) {
      if (changedField === 'dropoff') {
        const maxPickup = new Date(dropoffDate);
        maxPickup.setDate(maxPickup.getDate() - 1);
        pickupInput.value = formatDate(maxPickup);
        return true;
      }

      const minDropoff = new Date(pickupDate);
      minDropoff.setDate(minDropoff.getDate() + 1);
      dropoffInput.value = formatDate(minDropoff);
      return true;
    }

    return false;
  }

  function collectCarFilters() {
    if (carGlobalPickup && carGlobalDropoff) {
      return {
        location: 'At office location',
        pickup: String(carGlobalPickup.value || ''),
        dropoff: String(carGlobalDropoff.value || ''),
        drivers: 1,
      };
    }

    if (!carSearchForm) {
      const now = new Date();
      const pickupDate = new Date(now);
      pickupDate.setDate(now.getDate() + 1);
      const dropoffDate = new Date(now);
      dropoffDate.setDate(now.getDate() + 4);
      return {
        location: 'At office location',
        pickup: formatDate(pickupDate),
        dropoff: formatDate(dropoffDate),
        drivers: 1,
      };
    }

    const formData = new FormData(carSearchForm);
    return {
      location: String(formData.get('location') || 'At office location'),
      pickup: String(formData.get('pickup') || ''),
      dropoff: String(formData.get('dropoff') || ''),
      drivers: Number(formData.get('drivers') || 1),
    };
  }

  function syncCarDeliveryNotice() {
    if (!carDeliveryNotice || !carSearchForm) return;
    carDeliveryNotice.hidden = carSearchForm.elements.location.value !== 'Delivery';
  }

  function showCarMailPreview(payload) {
    const existing = document.querySelector('.mail-preview-modal-backdrop');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.className = 'mail-preview-modal-backdrop';
    backdrop.innerHTML = `
      <div class="mail-preview-modal card-plain" role="dialog" aria-modal="true" aria-label="${t('car.mailPreview.title')}">
        <div class="mail-preview-header">
          <div>
            <h3>${t('car.mailPreview.title')}</h3>
            <p>${t('car.mailPreview.subtitle')}</p>
          </div>
          <button type="button" class="btn btn-outline mail-preview-close">${t('car.mailPreview.close')}</button>
        </div>
        <div class="mail-preview-section">
          <strong>${t('car.mailPreview.to')}</strong>
          <p>${payload.email}</p>
        </div>
        <div class="mail-preview-section">
          <strong>${t('car.mailPreview.subject')}</strong>
          <p>${t('car.mailPreview.subjectValue', { vehicle: payload.vehicle })}</p>
        </div>
        <div class="mail-preview-section">
          <strong>${t('car.mailPreview.body')}</strong>
          <div class="mail-preview-body">
            <p>${t('car.mailPreview.greeting', { name: payload.name })}</p>
            <p>${t('car.mailPreview.line1', { vehicle: payload.vehicle })}</p>
            <p>${t('car.mailPreview.line2', { pickup: payload.pickup, dropoff: payload.dropoff, days: payload.days })}</p>
            <p>${t('car.mailPreview.line3', { location: payload.locationLabel })}</p>
            <p>${t('car.mailPreview.line4', { total: payload.total, perDay: payload.perDay })}</p>
            ${payload.location === 'Delivery' ? `<p>${t('car.mailPreview.line5')}</p>` : ''}
            <p>${t('car.mailPreview.line6')}</p>
          </div>
        </div>
      </div>
    `;

    function closeModal() {
      backdrop.remove();
      document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') closeModal();
    }

    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) closeModal();
    });
    backdrop.querySelector('.mail-preview-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', onKeyDown);
    document.body.appendChild(backdrop);
  }

  function initRentacarMap() {
    if (!rentacarMap || typeof window.L === 'undefined') return;
    const lat = 42.739494144005896;
    const lng = 17.62069531478174;
    const map = window.L.map(rentacarMap, { scrollWheelZoom: false }).setView([lat, lng], 12);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    window.L.marker([lat, lng]).addTo(map);
    window.L.circle([lat, lng], {
      radius: 5000,
      color: '#1f6f8b',
      weight: 2,
      fillColor: '#1f6f8b',
      fillOpacity: 0.12,
    }).addTo(map);
  }

  function createCarBookingForm(vehicle, filters) {
    const wrapper = document.createElement('div');
    wrapper.className = 'listing-booking-box';

    const initialDays = diffDays(filters.pickup, filters.dropoff);
    const initialPricing = getCarPricing(vehicle, filters.pickup, initialDays);
    const initialTotal = initialDays > 0 ? initialPricing.pricePerDay * initialDays : initialPricing.pricePerDay;

    const form = document.createElement('form');
    form.className = 'apt-book-form';
    form.innerHTML = `
      <label>${t('car.form.name')}<input name="name" required></label>
      <label>${t('car.form.email')}<input name="email" type="email" required></label>
      <label>${t('car.form.pickup')}<input name="pickup" type="date" value="${filters.pickup}" required></label>
      <label>${t('car.form.dropoff')}<input name="dropoff" type="date" value="${filters.dropoff}" required></label>
      <input type="hidden" name="carType" value="${vehicle.carType}">
      <label>${t('car.form.location')}
        <select name="location" required>
          <option value="At office location" ${filters.location === 'At office location' ? 'selected' : ''}>${t('rentacar.pickupAtOffice')}</option>
          <option value="Delivery" ${filters.location === 'Delivery' ? 'selected' : ''}>${t('rentacar.pickupDelivery')}</option>
        </select>
      </label>
      <label>${t('car.form.vehicleType')}<input value="${vehicle.name}" readonly></label>
      <p class="muted car-booking-total">${t('car.form.total')}: ${formatMoney(initialTotal)} (${formatMoney(initialPricing.pricePerDay)} ${t('car.perDaySuffix')})</p>
      <p class="muted car-delivery-note" ${filters.location === 'Delivery' ? '' : 'hidden'}>${t('car.form.deliveryNotice')}</p>
      <button type="submit" class="btn">${t('car.form.confirm')}</button>
      <pre class="apt-output"></pre>
    `;

    function updateBookingSummary() {
      const pickup = form.elements.pickup.value;
      const dropoff = form.elements.dropoff.value;
      const location = form.elements.location.value;
      const days = diffDays(pickup, dropoff);
      const pricing = getCarPricing(vehicle, pickup, days);
      const total = days > 0 ? pricing.pricePerDay * days : pricing.pricePerDay;
      const totalNode = form.querySelector('.car-booking-total');
      const deliveryNote = form.querySelector('.car-delivery-note');

      totalNode.textContent = `${t('car.form.total')}: ${formatMoney(total)} (${formatMoney(pricing.pricePerDay)} ${t('car.perDaySuffix')})`;
      deliveryNote.hidden = location !== 'Delivery';
    }

    ['pickup', 'dropoff', 'location'].forEach((fieldName) => {
      const input = form.elements[fieldName];
      if (!input) return;

      if (fieldName === 'pickup' || fieldName === 'dropoff') {
        input.addEventListener('change', () => {
          normalizeCarDateRange(form.elements.pickup, form.elements.dropoff, fieldName);

          if (carGlobalPickup && carGlobalDropoff) {
            carGlobalPickup.value = form.elements.pickup.value;
            carGlobalDropoff.value = form.elements.dropoff.value;
            normalizeCarDateRange(carGlobalPickup, carGlobalDropoff, fieldName);
            form.elements.pickup.value = carGlobalPickup.value;
            form.elements.dropoff.value = carGlobalDropoff.value;
            syncCarRangeInputFromHiddenDates();
          }

          updateBookingSummary();
          renderCars();
        });
        return;
      }

      input.addEventListener('change', updateBookingSummary);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const out = form.querySelector('.apt-output');
      const pickup = form.elements.pickup.value;
      const dropoff = form.elements.dropoff.value;
      const location = form.elements.location.value;
      const days = diffDays(pickup, dropoff);
      const pricing = getCarPricing(vehicle, pickup, days);
      const total = days > 0 ? pricing.pricePerDay * days : pricing.pricePerDay;

      showCarMailPreview({
        name: form.elements.name.value,
        email: form.elements.email.value,
        vehicle: vehicle.name,
        pickup: formatDisplayDate(pickup),
        dropoff: formatDisplayDate(dropoff),
        days,
        location,
        locationLabel: location === 'Delivery' ? t('rentacar.pickupDelivery') : t('rentacar.pickupAtOffice'),
        total: formatMoney(total),
        perDay: `${formatMoney(pricing.pricePerDay)} ${t('car.perDaySuffix')}`,
      });
      out.textContent = t('car.previewOnly');
    });

    updateBookingSummary();

    wrapper.syncDatesFromFilters = (nextFilters) => {
      if (form.elements.pickup.value !== nextFilters.pickup) {
        form.elements.pickup.value = nextFilters.pickup;
      }
      if (form.elements.dropoff.value !== nextFilters.dropoff) {
        form.elements.dropoff.value = nextFilters.dropoff;
      }
      updateBookingSummary();
    };

    wrapper.appendChild(form);
    return wrapper;
  }

  function buildVehicleCard(vehicle, filters, days) {
    const pricing = getCarPricing(vehicle, filters.pickup, days);
    const seasonKeysInRange = getSeasonKeysForRange(filters.pickup, filters.dropoff);
    const totalPrice = days > 0 ? pricing.pricePerDay * days : pricing.pricePerDay;
    const seasonOrder = ['low', 'shoulder', 'warm', 'high'];
    const seasonRows = seasonOrder.map((seasonKey) => {
      const rates = vehicle.seasonalRates[seasonKey] || vehicle.seasonalRates.warm;
      const classNames = [];
      if (seasonKey === pricing.seasonKey) classNames.push('active');
      if (seasonKeysInRange.has(seasonKey)) classNames.push('in-range');
      const rowClass = classNames.length ? ` class="${classNames.join(' ')}"` : '';
      return `
        <tr data-season-key="${seasonKey}"${rowClass}>
          <th>${t(getSeasonLabelKey(seasonKey))}</th>
          <td>${formatMoney(rates.short)}</td>
          <td>${formatMoney(rates.mid)}</td>
          <td>${formatMoney(rates.long)}</td>
        </tr>
      `;
    }).join('');

    const card = document.createElement('article');
    card.className = 'car-listing fade-up';
    card.dataset.vehicleId = vehicle.id;
    card.innerHTML = `
      <div class="cl--name">
        <h2>${vehicle.name} <small>${t('car.orSimilar')}</small></h2>
        <span class="cl--name-type">${vehicle.carType}</span>
      </div>

      <div class="cl--car">
        <img class="cl--car-img" src="${vehicle.imageUrl || ''}" alt="${vehicle.name}" loading="lazy" onerror="this.style.display='none'">
      </div>

      <div class="cl--info">
        <ul class="features">
          <li>
            <svg class="spec-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            ${vehicle.seats} seats
          </li>
          <li>
            <svg class="spec-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 10l1.5-4.5h11L19 10H5z"/></svg>
            ${vehicle.doors} doors
          </li>
          <li>
            <svg class="spec-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            ${vehicle.ac ? 'AC' : 'No AC'}
          </li>
          <li>
            <svg class="spec-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 10l1.5-4.5h11L19 10H5z"/></svg>
            ${vehicle.transmission}
          </li>
        </ul>

        <h4 class="cl--info-title">${t('car.services')}</h4>
        <ul class="cl--info-serv">
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 10l1.5-4.5h11L19 10H5z"/></svg>${t('car.freeShuttle')}</li>
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.unlimitedMileage')}</li>
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.fuelPolicy')}</li>
        </ul>

        <h4 class="cl--interest-title">${t('car.includes')}</h4>
        <ul class="cl--interest">
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.freeCancellation')}</li>
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.theftProtection')}</li>
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.freeAmendments')}</li>
          <li><svg class="spec-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>${t('car.fullInsurance')}</li>
        </ul>

        <h4 class="cl--tariff-title">Tariff</h4>
        <div class="car-tariff-table-wrap">
          <table class="car-tariff-table" aria-label="Tarife najma">
            <thead>
              <tr>
                <th>${t('car.seasonLabel')}</th>
                <th>${t('car.tierShort')}</th>
                <th>${t('car.tierMid')}</th>
                <th>${t('car.tierLong')}</th>
              </tr>
            </thead>
            <tbody>
              ${seasonRows}
            </tbody>
          </table>
          <div class="tariff-expand-hint">${t('car.tariffHint')}</div>
        </div>
      </div>

      <div class="cl--action">
        <div class="container-no-wrap">
          <span class="description">${t('car.pricePerDay')}:</span>
          <span class="price green">${formatMoney(pricing.pricePerDay)}</span>
        </div>
        <div class="cl--action-total">
          <span class="description muted js-car-selected-dates">${t('rentacar.basePriceCaption')}</span>
          <span class="price green js-car-total-price">${formatMoney(totalPrice)}</span>
        </div>
      </div>

      <div class="cl--footer">
        <button class="btn open-booking-btn">${t('car.viewDeal')}</button>
      </div>
    `;

    const toggleButton = card.querySelector('.open-booking-btn');
    const bookingBox = createCarBookingForm(vehicle, filters);
    bookingBox.hidden = true;
    card.appendChild(bookingBox);

    const tariffWrap = card.querySelector('.car-tariff-table-wrap');
    if (tariffWrap) {
      tariffWrap.dataset.expanded = '0';
      tariffWrap.setAttribute('role', 'button');
      tariffWrap.setAttribute('tabindex', '0');
      tariffWrap.setAttribute('aria-expanded', 'false');
      tariffWrap.addEventListener('click', () => toggleTariffTable(card));
      tariffWrap.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        toggleTariffTable(card);
      });
      syncTariffRows(card, seasonKeysInRange, pricing.seasonKey);
      setTariffWrapHeight(tariffWrap);
    }

    toggleButton.addEventListener('click', () => {
      bookingBox.hidden = !bookingBox.hidden;
      toggleButton.textContent = bookingBox.hidden ? t('car.book') : t('car.hideForm');
    });

    return { card, available: true };
  }

  function updateCarCardDynamicContent(card, vehicle, filters, days) {
    const pricing = getCarPricing(vehicle, filters.pickup, days);
    const seasonKeysInRange = getSeasonKeysForRange(filters.pickup, filters.dropoff);
    const totalPrice = days > 0 ? pricing.pricePerDay * days : pricing.pricePerDay;

    const totalNode = card.querySelector('.js-car-total');
    if (totalNode) totalNode.textContent = t('car.totalForDates', { total: formatMoney(totalPrice) });

    const rateNode = card.querySelector('.js-car-rate');
    if (rateNode) {
      rateNode.textContent = `${days > 0 ? t('car.days', { count: days }) : t('car.pricePerDay')} • ${formatMoney(pricing.pricePerDay)} ${t('car.perDaySuffix')}`;
    }

    const seasonNode = card.querySelector('.js-car-season');
    if (seasonNode) {
      seasonNode.textContent = `${t('car.seasonLabel')}: ${t(getSeasonLabelKey(pricing.seasonKey))} • ${t('car.tariffLabel')}: ${t(getTierLabelKey(pricing.tierKey))}`;
    }

    const selectedDatesNode = card.querySelector('.js-car-selected-dates');
    if (selectedDatesNode) selectedDatesNode.textContent = t('rentacar.basePriceCaption');

    const totalPriceNode = card.querySelector('.js-car-total-price');
    if (totalPriceNode) totalPriceNode.textContent = formatMoney(totalPrice);

    syncTariffRows(card, seasonKeysInRange, pricing.seasonKey);

    const bookingBox = card.querySelector('.listing-booking-box');
    if (bookingBox && typeof bookingBox.syncDatesFromFilters === 'function') {
      bookingBox.syncDatesFromFilters(filters);
    }
  }

  function buildCarsOnce(filters, days) {
    carListingsContainer.innerHTML = '';
    carCardsById.clear();

    const sortedVehicles = [...CAR_CATALOG].sort((a, b) => {
      const aPrice = getCarPricing(a, filters.pickup, days).pricePerDay;
      const bPrice = getCarPricing(b, filters.pickup, days).pricePerDay;
      return aPrice - bPrice;
    });

    sortedVehicles.forEach((vehicle) => {
      const { card } = buildVehicleCard(vehicle, filters, days);
      carCardsById.set(vehicle.id, card);
      carListingsContainer.appendChild(card);
    });

    carCardsRendered = true;
  }

  function renderCars() {
    const filters = collectCarFilters();
    const days = diffDays(filters.pickup, filters.dropoff);

    if (filters.pickup && filters.dropoff && days <= 0) {
      carCardsRendered = false;
      carCardsById.clear();
      carListingsContainer.innerHTML = `<p class="card-plain">${t('car.invalidDates')}</p>`;
      carResultsTitle.textContent = t('car.zeroResults');
      carResultsSummary.textContent = t('car.fixDates');
      return;
    }

    if (!carCardsRendered || carCardsById.size !== CAR_CATALOG.length) {
      buildCarsOnce(filters, days);
    }

    CAR_CATALOG.forEach((vehicle) => {
      const card = carCardsById.get(vehicle.id);
      if (!card) return;
      updateCarCardDynamicContent(card, vehicle, filters, days);
    });

    const availableCount = carCardsById.size;

    if (carResultsTitle) carResultsTitle.textContent = t('rentacar.dateSelection');
    carResultsSummary.textContent = t('rentacar.basePriceNotice');
  }

  if (carSearchForm) {
    setDefaultCarDates();
    syncCarDeliveryNotice();
    if (carSearchForm.elements.location) {
      carSearchForm.elements.location.addEventListener('change', () => {
        syncCarDeliveryNotice();
        renderCars();
      });
    }
    carSearchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      syncCarDeliveryNotice();
      renderCars();
    });
  }

  if (carGlobalPickup && carGlobalDropoff) {
    setDefaultCarDates();
    initCarRangePicker();
    syncCarRangeInputFromHiddenDates();
  }

  (async () => {
    carListingsContainer.textContent = t('common.loadingVehicles');
    try {
      initRentacarMap();
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
        <a class="btn btn-outline" href="/apartment.html?id=${encodeURIComponent(apt.id)}">${t('apartments.viewDetails')}</a>
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

const apartmentDetailsPage = document.getElementById('apartmentDetailsPage');
if (apartmentDetailsPage) {
  function detailsMoney(amount) {
    return new Intl.NumberFormat(t('common.locale'), {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function detailsDefaultDates() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const dayAfter = new Date(now);
    dayAfter.setDate(now.getDate() + 4);
    return { checkin: formatDate(tomorrow), checkout: formatDate(dayAfter) };
  }

  async function loadApartmentDetails() {
    const params = new URLSearchParams(window.location.search);
    const apartmentId = params.get('id');
    if (!apartmentId) {
      apartmentDetailsPage.innerHTML = `<p class="card-plain">${t('apartmentDetails.notFound')}</p>`;
      return;
    }

    apartmentDetailsPage.innerHTML = `<p class="card-plain">${t('common.loadingApartments')}</p>`;

    try {
      const response = await fetch(`/api/apartments/${encodeURIComponent(apartmentId)}`);
      const payload = await response.json();
      if (!response.ok || !payload?.apartment) {
        apartmentDetailsPage.innerHTML = `<p class="card-plain">${t('apartmentDetails.notFound')}</p>`;
        return;
      }

      const apt = payload.apartment;
      const bookings = payload.bookings || [];
      const defaults = detailsDefaultDates();
      const perks = (apt.perks || []).join(' • ');

      apartmentDetailsPage.innerHTML = `
        <article class="card-plain apartment-detail-card fade-up">
          <div class="apartment-detail-hero">
            <img src="${apt.imageUrl || ''}" alt="${apt.name}" loading="lazy" onerror="this.style.display='none'">
          </div>
          <div class="apartment-detail-content">
            <p class="listing-location">${t('apartmentDetails.locationDistance', { city: apt.city || '-', distance: apt.distanceKm || '-' })}</p>
            <h2>${apt.name}</h2>
            <p class="listing-description">${apt.description || ''}</p>
            <p class="listing-perks">${perks}</p>
            <p class="listing-type">${t('apartments.type', { type: apt.type || '-' })}</p>
            <p class="listing-total">${detailsMoney(apt.pricePerNight)} <span class="muted">${t('apartments.perNightSuffix')}</span></p>
            <p class="muted">${t('apartmentDetails.currentOccupancy', { count: bookings.length })}</p>
          </div>
        </article>
        <section class="card-plain apartment-detail-booking fade-up">
          <h3>${t('apartmentDetails.reserveTitle')}</h3>
          <form id="apartmentDetailsBookingForm" class="apt-book-form">
            <label>${t('apartments.form.name')}<input name="name" required></label>
            <label>${t('apartments.form.email')}<input name="email" type="email" required></label>
            <label>${t('apartments.form.checkin')}<input name="checkin" type="date" value="${defaults.checkin}" required></label>
            <label>${t('apartments.form.checkout')}<input name="checkout" type="date" value="${defaults.checkout}" required></label>
            <label>${t('apartments.form.guests')}<input name="guests" type="number" min="1" value="2" required></label>
            <label class="check-line"><input type="checkbox" name="evisitor" value="1" checked>${t('apartments.form.evisitor')}</label>
            <button type="submit" class="btn">${t('apartments.form.confirm')}</button>
            <pre class="apt-output"></pre>
          </form>
        </section>
      `;

      const form = document.getElementById('apartmentDetailsBookingForm');
      if (!form) return;

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const out = form.querySelector('.apt-output');
        out.textContent = t('apartments.sending');
        try {
          const body = formDataToObject(form);
          const booking = await postJson(`/api/apartments/${apt.id}/book`, body);
          out.textContent = t('apartments.reservationSuccess', { id: booking.booking.id });
        } catch (error) {
          out.textContent = `${t('common.errorPrefix')}: ${error.message}`;
        }
      });
    } catch (error) {
      apartmentDetailsPage.innerHTML = `<p class="card-plain">${t('common.errorPrefix')}: ${error.message}</p>`;
    }
  }

  loadApartmentDetails();
}
