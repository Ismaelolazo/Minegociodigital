// ===== Config =====
const WHATSAPP_NUMBER = "59174036486";
const DEFAULT_MESSAGE = "Hola MiNegocio Digital, quiero digitalizar mi negocio.";
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfCPbewoXU4p2ep_cgCMGQp0spACOvnRkwR-tutj0z0fA22jA/viewform?usp=header";

function buildWaLink(num, msg){
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Año footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú mobile
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector("[data-menu]");
  if (btn && menu) btn.addEventListener("click", () => {
    const open = menu.classList.toggle("show");
    btn.setAttribute("aria-expanded", String(open));
  });

  // CTAs de WhatsApp
  const wa1 = document.getElementById("ctaWhatsApp");
  const wa2 = document.getElementById("ctaWhatsApp2");
  [wa1, wa2].forEach(a => { if (a) a.href = buildWaLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE); });

  // CTAs de Formulario (abre en pestaña nueva)
  const formCtas = document.querySelectorAll(".js-form");
  formCtas.forEach(a => {
    a.href = FORM_URL;
    a.target = "_blank";
    a.rel = "noopener";
  });
});
