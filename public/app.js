function formatDate(date) {
  return date.toISOString().slice(0, 10);
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

initGifPlayers();

function initBackgroundParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.style.setProperty('--bg-scroll-y', '50%');
    return;
  }

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
  header.textContent = first.toLocaleString('hr-HR', { month: 'long', year: 'numeric' });
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
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

const reserveForm = document.getElementById('reserveForm');
if (reserveForm) {
  reserveForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const out = document.getElementById('reserveOutput');
    out.textContent = 'Slanje rezervacije...';
    try {
      const body = formDataToObject(reserveForm);
      const data = await postJson('/api/reserve-apartment', body);
      out.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      out.textContent = 'Error: ' + error.message;
    }
  });
}

const checkinForm = document.getElementById('checkinForm');
if (checkinForm) {
  checkinForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const out = document.getElementById('checkinOutput');
    out.textContent = 'Obrada online check-ina...';
    try {
      const body = formDataToObject(checkinForm);
      const data = await postJson('/api/guest/checkin', body);
      out.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      out.textContent = 'Error: ' + error.message;
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
    return new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
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
      <label>Ime i prezime<input name="name" required></label>
      <label>Email<input name="email" type="email" required></label>
      <label>Datum preuzimanja<input name="pickup" type="date" value="${filters.pickup}" required></label>
      <label>Datum povrata<input name="dropoff" type="date" value="${filters.dropoff}" required></label>
      <input type="hidden" name="carType" value="${vehicle.carType}">
      <input type="hidden" name="location" value="${filters.location}">
      <label>Lokacija<input value="${filters.location}" readonly></label>
      <label>Tip vozila<input value="${vehicle.name}" readonly></label>
      <button type="submit" class="btn">Potvrdi rezervaciju vozila</button>
      <pre class="apt-output"></pre>
    `;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const out = form.querySelector('.apt-output');
      out.textContent = 'Slanje rezervacije vozila...';
      try {
        const body = formDataToObject(form);
        const payload = await postJson('/api/rentacar/book', body);
        out.textContent = `Rezervacija uspjesna: ${payload.reservation.id}`;
        await loadCarBookings();
        renderCars();
      } catch (error) {
        out.textContent = 'Error: ' + error.message;
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
        <span>${vehicle.imageLabel}</span>
      </div>
      <div class="listing-main">
        <p class="listing-location">${filters.location} • ${vehicle.transmission} • ${vehicle.fuel}</p>
        <h3>${vehicle.name}</h3>
        <p class="listing-description">${vehicle.description}</p>
        <p class="listing-perks">${vehicle.perks.join(' • ')}</p>
        <p class="listing-type">${vehicle.seats} sjedala • Kategorija: ${vehicle.carType.toUpperCase()}</p>
      </div>
      <div class="listing-side">
        <div class="listing-rating-wrap">
          <strong>Ocjena ${vehicle.rating}</strong>
          <span>${vehicle.reviewCount} recenzija</span>
        </div>
        <div class="listing-price-wrap">
          <p class="listing-status ${available ? 'ok' : 'bad'}">${available ? 'Dostupno' : 'Nedostupno za odabrane datume'}</p>
          <p class="listing-total">${formatMoney(totalPrice)}</p>
          <p class="muted">${days > 0 ? `${days} dana` : 'Cijena po danu'} • ${formatMoney(vehicle.pricePerDay)} / dan</p>
        </div>
        <button class="btn open-booking-btn" ${available ? '' : 'disabled'}>
          ${available ? 'Rezerviraj vozilo' : 'Trenutno nedostupno'}
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
        toggleButton.textContent = bookingBox.hidden ? 'Rezerviraj vozilo' : 'Sakrij formu';
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
      carListingsContainer.innerHTML = '<p class="card-plain">Datum povrata mora biti nakon datuma preuzimanja.</p>';
      carResultsTitle.textContent = 'Pronadeno 0 vozila';
      carResultsSummary.textContent = 'Ispravite datume i pokusajte ponovno.';
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

    carResultsTitle.textContent = `Pronadena ${CAR_CATALOG.length} vozila`;
    carResultsSummary.textContent = `${availableCount} dostupno na lokaciji ${filters.location} za odabrani termin.`;
  }

  if (carSearchForm) {
    setDefaultCarDates();
    carSearchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      renderCars();
    });
  }

  (async () => {
    carListingsContainer.textContent = 'Ucitavanje vozila...';
    try {
      await loadCarBookings();
      renderCars();
    } catch (error) {
      carListingsContainer.textContent = 'Error: ' + error.message;
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
    return new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
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
      <label>Ime i prezime<input name="name" required></label>
      <label>Email<input name="email" type="email" required></label>
      <label>Check-in<input name="checkin" type="date" value="${filters.checkin}" required></label>
      <label>Check-out<input name="checkout" type="date" value="${filters.checkout}" required></label>
      <label>Broj gostiju<input name="guests" type="number" min="1" value="${filters.guests || 1}" required></label>
      <label class="check-line"><input type="checkbox" name="evisitor" value="1" checked>eVisitor prijava</label>
      <button type="submit" class="btn">Potvrdi rezervaciju</button>
      <pre class="apt-output"></pre>
    `;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const out = form.querySelector('.apt-output');
      out.textContent = 'Slanje rezervacije...';
      try {
        const body = formDataToObject(form);
        const payload = await postJson(`/api/apartments/${apt.id}/book`, body);
        out.textContent = `Rezervacija uspjesna: ${payload.booking.id}`;
        await loadApartmentsData();
        renderApartments();
      } catch (error) {
        out.textContent = 'Error: ' + error.message;
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
        <span>${apt.imageLabel || 'Smjestaj'}</span>
      </div>
      <div class="listing-main">
        <p class="listing-location">${apt.city} • ${apt.distanceKm || '-'} km do centra</p>
        <h3>${apt.name}</h3>
        <p class="listing-description">${apt.description || ''}</p>
        <p class="listing-perks">${perksText}</p>
        <p class="listing-type">Tip: ${apt.type}</p>
      </div>
      <div class="listing-side">
        <div class="listing-rating-wrap">
          <strong>Ocjena ${apt.rating || '-'}</strong>
          <span>${apt.reviewCount || 0} recenzija</span>
        </div>
        <div class="listing-price-wrap">
          <p class="listing-status ${available ? 'ok' : 'bad'}">${available ? 'Dostupno' : 'Zauzeto za odabrane datume'}</p>
          <p class="listing-total">${formatMoney(totalPrice)}</p>
          <p class="muted">${nights > 0 ? `${nights} nocenja` : 'Cijena po noci'} • ${formatMoney(apt.pricePerNight)} / noc</p>
        </div>
        <button class="btn open-booking-btn" ${available ? '' : 'disabled'}>
          ${available ? 'Rezerviraj odmah' : 'Trenutno nedostupno'}
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
        toggleButton.textContent = bookingBox.hidden ? 'Rezerviraj odmah' : 'Sakrij formu';
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
      apartmentsContainer.innerHTML = '<p class="card-plain">Check-out datum mora biti nakon check-in datuma.</p>';
      resultsTitle.textContent = 'Pronadeno 0 apartmana';
      resultsSummary.textContent = 'Ispravite datume i pokusajte ponovno.';
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
      apartmentsContainer.innerHTML = '<p class="card-plain">Nema rezultata za trazene kriterije.</p>';
    }

    resultsTitle.textContent = `Pronadeno ${filtered.length} apartmana`;
    resultsSummary.textContent = `${availableCount} dostupno za trazeni termin. Odabir gostiju: ${filters.guests}.`;
  }

  if (searchForm) {
    setDefaultSearchDates();
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      renderApartments();
    });
  }

  (async () => {
    apartmentsContainer.textContent = 'Ucitavanje apartmana...';
    try {
      await loadApartmentsData();
      renderApartments();
    } catch (error) {
      apartmentsContainer.textContent = 'Error: ' + error.message;
    }
  })();
}
