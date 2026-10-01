// Plain acrylic — tap to reveal the length-based pricing
const acrylicToggle = document.getElementById('acrylicToggle');
const acrylicPanel = document.getElementById('acrylicPanel');
acrylicToggle.addEventListener('click', () => {
  const isOpen = acrylicPanel.classList.toggle('open');
  acrylicToggle.classList.toggle('open', isOpen);
  acrylicToggle.setAttribute('aria-expanded', String(isOpen));
});

// Mobile nav dropdown
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function setNav(open) {
  navLinks.classList.toggle('open', open);
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
navToggle.addEventListener('click', () => setNav(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNav(false)));

// Contact drawer — FAQ first, then WhatsApp/email/call
const fabToggle = document.getElementById('fabToggle');
const fabPanel = document.getElementById('fabPanel');
function setFab(open) {
  fabPanel.classList.toggle('open', open);
  fabToggle.classList.toggle('open', open);
  fabToggle.setAttribute('aria-expanded', String(open));
}
fabToggle.addEventListener('click', () => setFab(!fabPanel.classList.contains('open')));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { setNav(false); setFab(false); }
});

// Show the contact button once you've scrolled past the hero
const navEl = document.querySelector('nav');
const fabEl = document.querySelector('.fab');
const heroEl = document.querySelector('.hero');
function updateOnScroll() {
  const pastHero = heroEl.getBoundingClientRect().bottom <= navEl.offsetHeight;
  fabEl.classList.toggle('visible', pastHero);
  if (!pastHero) setFab(false);
}
window.addEventListener('scroll', updateOnScroll, { passive: true });
updateOnScroll();
