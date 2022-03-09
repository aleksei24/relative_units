const menu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (menu) {
  menu.addEventListener('click', toggleMenu);
}

function toggleMenu(params) {
  menu.classList.toggle('active');
  menuBody.classList.toggle('active');

  const menuCatalog = document.querySelector('.menu-catalog');

  if (menuCatalog.classList.contains('catalog-open')) {
    menuCatalog.classList.remove('catalog-open');
  }
}

// ================================================

document.addEventListener('click', documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
  menuBlocks.forEach((block) => {
    const menuBlockItems = block.querySelectorAll('.sub-menu-catalog__category').length;
    block.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
  });
}

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('[data-parent]')) {
    e.preventDefault();
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

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

  if (targetElement.closest('.menu-top-header__link_catalog')) {
    e.preventDefault();
    const menuCatalog = document.querySelector('.menu-catalog');
    // const catalogLink = targetElement.closest('.menu-top-header__link_catalog');
    menuCatalog.classList.add('catalog-open');
  }

  if (targetElement.closest('.menu-catalog__back')) {
    e.preventDefault();
    // const menuCatalogBack = document.querySelector('.menu-catalog__back');
    targetElement.addEventListener('click', function () {
      // e.preventDefault();
      document.querySelector('.menu-catalog').remove('catalog-open');
    });
    // document.documentElement.classList.remove('catalog-open');

    // document.documentElement.classList.remove('sub-catalog-open');
  }
}

// =================================================
