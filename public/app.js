function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

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

const rentForm = document.getElementById('rentForm');
const carCalendarTarget = document.getElementById('carCalendar');

async function renderCarCalendar() {
  if (!carCalendarTarget) return;
  carCalendarTarget.textContent = 'Ucitavanje kalendara...';
  try {
    const res = await fetch('/api/rentacar/bookings');
    const data = await res.json();
    const bookedDates = new Set();
    (data.bookings || []).forEach((booking) => {
      datesBetween(booking.pickup, booking.dropoff).forEach((dateKey) => bookedDates.add(dateKey));
    });
    carCalendarTarget.innerHTML = '';
    carCalendarTarget.appendChild(renderMonthCalendar(bookedDates));
  } catch (error) {
    carCalendarTarget.textContent = 'Error: ' + error.message;
  }
}

if (rentForm) {
  rentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const out = document.getElementById('rentOutput');
    out.textContent = 'Slanje rent a car rezervacije...';
    try {
      const body = formDataToObject(rentForm);
      const data = await postJson('/api/rentacar/book', body);
      out.textContent = JSON.stringify(data, null, 2);
      await renderCarCalendar();
    } catch (error) {
      out.textContent = 'Error: ' + error.message;
    }
  });
  renderCarCalendar();
}

const apartmentsContainer = document.getElementById('apartmentsList');
if (apartmentsContainer) {
  async function renderApartments() {
    apartmentsContainer.textContent = 'Ucitavanje apartmana...';
    try {
      const response = await fetch('/api/apartments');
      const data = await response.json();
      apartmentsContainer.innerHTML = '';

      for (const apt of data.apartments || []) {
        const card = document.createElement('article');
        card.className = 'apt-card card-plain fade-up';

        const title = document.createElement('h3');
        title.textContent = apt.name;
        card.appendChild(title);

        const meta = document.createElement('p');
        meta.className = 'muted';
        meta.textContent = `${apt.city} | ${apt.type} | EUR ${apt.pricePerNight} / noc`;
        card.appendChild(meta);

        const bookingsResponse = await fetch(`/api/apartments/${apt.id}/bookings`);
        const bookingsPayload = await bookingsResponse.json();
        const bookedDates = new Set();
        (bookingsPayload.bookings || []).forEach((booking) => {
          datesBetween(booking.checkin, booking.checkout).forEach((dateKey) => bookedDates.add(dateKey));
        });

        let calendarNode = renderMonthCalendar(bookedDates);
        card.appendChild(calendarNode);

        const form = document.createElement('form');
        form.className = 'apt-book-form';
        form.innerHTML = `
          <label>Ime i prezime<input name="name" required></label>
          <label>Email<input name="email" type="email" required></label>
          <label>Check-in<input name="checkin" type="date" required></label>
          <label>Check-out<input name="checkout" type="date" required></label>
          <label>Broj gostiju<input name="guests" type="number" min="1" value="1"></label>
          <label class="check-line"><input type="checkbox" name="evisitor" value="1" checked>eVisitor prijava</label>
          <button type="submit" class="btn">Rezerviraj apartman</button>
          <pre class="apt-output"></pre>
        `;

        form.addEventListener('submit', async (event) => {
          event.preventDefault();
          const out = form.querySelector('.apt-output');
          out.textContent = 'Slanje rezervacije...';
          try {
            const body = formDataToObject(form);
            const payload = await postJson(`/api/apartments/${apt.id}/book`, body);
            out.textContent = JSON.stringify(payload, null, 2);

            const refreshResponse = await fetch(`/api/apartments/${apt.id}/bookings`);
            const refreshPayload = await refreshResponse.json();
            const updatedSet = new Set();
            (refreshPayload.bookings || []).forEach((booking) => {
              datesBetween(booking.checkin, booking.checkout).forEach((dateKey) => updatedSet.add(dateKey));
            });
            const freshCalendarNode = renderMonthCalendar(updatedSet);
            card.replaceChild(freshCalendarNode, calendarNode);
            calendarNode = freshCalendarNode;
          } catch (error) {
            out.textContent = 'Error: ' + error.message;
          }
        });

        card.appendChild(form);
        apartmentsContainer.appendChild(card);
      }
    } catch (error) {
      apartmentsContainer.textContent = 'Error: ' + error.message;
    }
  }

  renderApartments();
}
