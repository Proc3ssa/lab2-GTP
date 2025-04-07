const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
});
