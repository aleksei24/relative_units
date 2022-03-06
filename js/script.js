const menu = document.querySelector('.icon-menu');

if (menu) {
  menu.addEventListener('click', toggleMenu);
}

function toggleMenu(params) {
  menu.classList.toggle('active');
}

// ================================================

document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('[data-parent]')) {
    e.preventDefault();
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector('.menu-catalog__sub-menu');

    if (subMenu) {
      const activeLink = document.querySelector('.sub-menu-active');
      const activeBlock = document.querySelector('.sub-menu-open');

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove('sub-menu-active');
        activeBlock.classList.remove('sub-menu-open');
      }

      targetElement.classList.toggle('sub-menu-active');
      subMenu.classList.toggle('sub-menu-open');
    } else {
      console.log("The sub-menu you're lookig for doesn't exist");
    }
  }
}
