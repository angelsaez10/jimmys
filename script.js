const tickets = [
  {
    title: "Fiesta Universitaria",
    date: "Viernes 21 - 23:30",
    description: "Entrada general para la gran sesion universitaria con consumicion incluida.",
    price: "12 EUR",
    tags: ["Consumicion", "Acceso general", "Aforo limitado"],
    link: "#contacto"
  },
  {
    title: "Reggaeton All Night",
    date: "Sabado 22 - 23:59",
    description: "La noche mas fuerte de la semana con hits urbanos, show visual y DJ invitado.",
    price: "15 EUR",
    tags: ["DJ invitado", "Show visual", "Main room"],
    link: "#contacto"
  },
  {
    title: "Sunday Closing",
    date: "Domingo 23 - 22:30",
    description: "Cierre de fin de semana con entrada reducida y ambiente exclusivo.",
    price: "10 EUR",
    tags: ["Entrada reducida", "Sesion especial", "Ultimas plazas"],
    link: "#contacto"
  }
];

const events = [
  {
    title: "White Party",
    date: "28 Junio",
    description: "Fiesta tematica en blanco con decoracion especial, performers y sorpresas durante toda la noche.",
    tags: ["Dress code", "Performance", "Photocall"]
  },
  {
    title: "Techno Pulse",
    date: "5 Julio",
    description: "Sesion electronica para un publico que busca una experiencia mas intensa y envolvente.",
    tags: ["Techno", "Visuals", "Guest DJ"]
  },
  {
    title: "Summer Opening",
    date: "12 Julio",
    description: "Arranque de temporada con artistas invitados, terraceo y produccion especial.",
    tags: ["Opening", "Artistas", "Terraza"]
  }
];

const ticketsContainer = document.getElementById("ticketsContainer");
const eventsContainer = document.getElementById("eventsContainer");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function renderTickets() {
  ticketsContainer.innerHTML = tickets
    .map(
      (ticket) => `
        <article class="ticket-card">
          <div class="ticket-date">${ticket.date}</div>
          <h3>${ticket.title}</h3>
          <p>${ticket.description}</p>
          <div class="ticket-meta">
            ${ticket.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="price-row">
            <span class="price">${ticket.price}</span>
            <a href="${ticket.link}" class="btn btn-primary">Comprar</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderEvents() {
  eventsContainer.innerHTML = events
    .map(
      (event) => `
        <article class="event-card">
          <div class="event-date">${event.date}</div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <div class="event-meta">
            ${event.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    formMessage.textContent = `Gracias ${name}, hemos recibido tu solicitud. Te responderemos pronto.`;

    contactForm.reset();
  });
}

renderTickets();
renderEvents();
