// Service rows — tap toggles the same highlight the hover state gives on desktop
document.querySelectorAll('.menu-row').forEach(row => {
  row.addEventListener('click', () => row.classList.toggle('active'));
});

// Plain acrylic — tap to reveal the length-based pricing
const acrylicToggle = document.getElementById('acrylicToggle');
const acrylicPanel = document.getElementById('acrylicPanel');
acrylicToggle.addEventListener('click', () => {
  const isOpen = acrylicPanel.classList.toggle('open');
  acrylicToggle.classList.toggle('open', isOpen);
  acrylicToggle.setAttribute('aria-expanded', String(isOpen));
});

// Nav dropdown
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact drawer — FAQ first, then WhatsApp/email/call
const fabToggle = document.getElementById('fabToggle');
const fabPanel = document.getElementById('fabPanel');
fabToggle.addEventListener('click', () => {
  const isOpen = fabPanel.classList.toggle('open');
  fabToggle.classList.toggle('open', isOpen);
  fabToggle.setAttribute('aria-expanded', String(isOpen));
});

// Scroll: swap logo for links, show contact button
const navEl = document.querySelector('nav');
const fabEl = document.querySelector('.fab');
const heroEl = document.querySelector('.hero');
function updateOnScroll() {
  const navHeight = navEl.offsetHeight;
  const pastHero = heroEl.getBoundingClientRect().bottom <= navHeight;
  navEl.classList.toggle('scrolled', pastHero);
  fabEl.classList.toggle('visible', pastHero);
  if (!pastHero) {
    fabPanel.classList.remove('open');
    fabToggle.classList.remove('open');
    fabToggle.setAttribute('aria-expanded', 'false');
  }
}
window.addEventListener('scroll', updateOnScroll, { passive: true });
updateOnScroll();
