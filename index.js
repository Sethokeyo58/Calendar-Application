const events = [
  {
    title: "Bootcamp",
    date: new Date("2025-07-02"),
    location: "Valley Road",
    attendees: new Set(["Seth", "Jane", "Levis"])
  },
  {
    title: "Developer`s Event",
    date: new Date("2025-07-5"),
    location: "Zuri Hotel",
    attendees: new Set(["Carol"])
  },
  {
    title: "Product Launch",
    date: new Date("2025-07-08"),
    location: "Company HQ",
    attendees: new Set(["Dave", "Eve", "Frank"])
  }
];


function renderEvents() {
  const tbody = document.getElementById("eventTable");
  tbody.innerHTML = "";

  events.forEach(({ title, date, location, attendees }) => {
    const row = `<tr>
      <td>${title}</td>
      <td>${date.toLocaleDateString()}</td>
      <td>${location}</td>
      <td>${Array.from(attendees).join(", ")}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function renderUpcoming() {
  const now = new Date();
  const in7Days = new Date();
  in7Days.setDate(now.getDate() + 7);
  const list = document.getElementById("upcomingEvents");
  list.innerHTML = "";

  events
    .filter(event => event.date >= now && event.date <= in7Days)
    .forEach(event => {
      const li = document.createElement("li");
      li.textContent = `${event.title} - ${event.date.toDateString()}`;
      list.appendChild(li);
    });
}

function addAttendee() {
  const title = document.getElementById("eventTitle").value;
  const name = document.getElementById("attendeeName").value;
  const event = events.find(e => e.title === title);
  if (event && name) {
    event.attendees.add(name);
    renderEvents();
    document.getElementById("eventTitle").value = "";
    document.getElementById("attendeeName").value = "";
  } else {
    alert("Event not found or name missing.");
  }
}

renderEvents();
renderUpcoming();

