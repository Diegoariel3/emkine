// ============ 1. SCROLL REVEAL ============
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ============ 2. MENÚ MÓVIL (HAMBURGUESA) ============
const menuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en cualquier enlace
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navList.classList.remove("active");
    });
  });
}

// ============ 3. POPUP AGENDA ============
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup-agenda");

  // Si el popup no existe en esta página específica, detenemos el script para evitar errores
  if (!popup) return;

  const closeBtn = popup.querySelector(".popup-close");

  // Fecha límite: 20 de octubre de 2026 a las 23:59:59
  const fechaLimite = new Date("2026-10-20T23:59:59");
  const fechaActual = new Date();

  const popupSeen = localStorage.getItem("popupAgendaSeen");
  const fechaExpirada = fechaActual > fechaLimite;

  if (!popupSeen && !fechaExpirada) {
    setTimeout(() => {
      popup.classList.add("active");
    }, 1500);
  }

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
    localStorage.setItem("popupAgendaSeen", "true");
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("active");
      localStorage.setItem("popupAgendaSeen", "true");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.classList.contains("active")) {
      popup.classList.remove("active");
      localStorage.setItem("popupAgendaSeen", "true");
    }
  });
});
