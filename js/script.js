const menu = document.querySelector('.icon-menu');

if (menu) {
  menu.addEventListener('click', toggleMenu);
}

function toggleMenu(params) {
  menu.classList.toggle('active');
}
