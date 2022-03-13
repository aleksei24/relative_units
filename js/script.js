const menu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (menu) {
  menu.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  menu.classList.toggle('active');
  menuBody.classList.toggle('active');

  const menuCatalog = document.querySelector('.menu-catalog');
  const catalogHeaderMenu = document.querySelector('.catalog-header__menu');
  const subMenuCatalog = document.querySelector('.sub-menu-catalog');

  if (catalogHeaderMenu.classList.contains('catalog-open')) {
    catalogHeaderMenu.classList.remove('catalog-open');
  }

  if (menuCatalog.classList.contains('catalog-open')) {
    menuCatalog.classList.remove('catalog-open');
  }

  if (subMenuCatalog.classList.contains('sub-menu-open')) {
    subMenuCatalog.classList.remove('sub-menu-open');
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

      document.querySelector('.sub-menu-catalog').classList.toggle('sub-menu-open');
      targetElement.classList.toggle('sub-menu-active');
      subMenu.classList.toggle('sub-menu-open');
    } else {
      console.log("The sub-menu you're lookig for doesn't exist");
    }
  }
}

// =================================================

const menuTopHeaderLinkCatalog = document.querySelector('.menu-top-header__link_catalog');
menuTopHeaderLinkCatalog.addEventListener('click', function (e) {
  e.preventDefault();
  const menuCatalog = document.querySelector('.menu-catalog');
  menuCatalog.classList.add('catalog-open');
});

const menuCatalogBack = document.querySelector('.menu-catalog__back');
menuCatalogBack.addEventListener('click', function () {
  document.querySelector('.menu-catalog').classList.remove('catalog-open');
});

const subMenuCatalogBack = document.querySelector('.sub-menu-catalog__back');
const subMenuCatalogBlock = document.querySelector('.sub-menu-catalog__block');
const subMenuCatalog = document.querySelector('.sub-menu-catalog');
const menuCatalogLink = document.querySelectorAll('.menu-catalog__link');
subMenuCatalogBack.addEventListener('click', function () {
  subMenuCatalog.classList.toggle('sub-menu-open');
  // if (
  //   document.documentElement.closest('.menu-catalog__link').classList.contains('sub-menu-active')
  // ) {
  //   document.documentElement.classList.remove('sub-menu-active');
  // }
});

tippy('[data-tippy-content]', {
  content: 'My tooltip!',
});
