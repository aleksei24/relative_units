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

// ====================================================
// tips

tippy('[data-tippy-content]', {
  content: 'My tooltip!',
});

// =======================================================
// swiper
if (document.querySelector('.main-block__slider')) {
  new Swiper('.main-block__slider', {
    speed: 1000,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.controll-main-block__dotts',
      clickable: true,
    },
    on: {
      init: function (swiper) {
        const allSlides = document.querySelector('.fraction-controll__all');
        const allSlidesItems = document.querySelectorAll(
          '.slide-main-block:not(.swiper-slide-duplicate)'
        );

        allSlides.innerHTML =
          allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
      },
      slideChange: function (swiper) {
        const currentSlide = document.querySelector('.fraction-controll__current');
        currentSlide.innerHTML =
          swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : realIndex + 1;
      },
    },
  });
}

if (document.querySelector('.products-slider')) {
  new Swiper('.products-slider__slider', {
    speed: 800,
    // spaceBetween: 30,
    // slidesPerView: 4,
    // loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.products-slider__dotts',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {},
  });
}

if (document.querySelector('.hit-products')) {
  new Swiper('.hit-products__slider', {
    speed: 1500,
    // spaceBetween: 30,
    // slidesPerView: 3,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hit-products__dotts',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
    },
    on: {},
  });
}

if (document.querySelector('.products-new')) {
  new Swiper('.products-new__slider', {
    speed: 4500,
    // spaceBetween: 30,
    // slidesPerView: 4,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {},
  });
}
