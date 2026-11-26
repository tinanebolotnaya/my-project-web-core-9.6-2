import Swiper from 'swiper'
import 'swiper/css/bundle'
import '../scss/style.scss'

let brandsSwiper = null
const brandsContainer = document.querySelector('.brands__swiper')

function initBrandsSwiper() {
  if (window.innerWidth < 768) {
    if (!brandsSwiper && brandsContainer) {
      brandsSwiper = new Swiper('.brands__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
          el: '.brands__pagination',
          clickable: true
        }
      })
    }
  } else {
    if (brandsSwiper) {
      brandsSwiper.destroy(true, true)
      brandsSwiper = null

      if (brandsContainer) {
        const wrapper = brandsContainer.querySelector('.swiper-wrapper')
        if (wrapper) {
          wrapper.removeAttribute('style')
        }

        const slides = brandsContainer.querySelectorAll('.swiper-slide')
        slides.forEach((slide) => {
          slide.removeAttribute('style')
        })
      }
    }
  }
}

initBrandsSwiper()
window.addEventListener('resize', initBrandsSwiper)

const brands = document.querySelector('.brands')
const showButton = document.querySelector('.brands__button--start')
const hideButton = document.querySelector('.brands__button--end')

if (showButton && hideButton) {
  showButton.addEventListener('click', function () {
    brands.classList.add('brands--expanded')
  })
  if (brandsSwiper) {
    brandsSwiper.destroy(true, true)
    brandsSwiper = null
  }
  hideButton.addEventListener('click', function () {
    brands.classList.remove('brands--expanded')
    initBrandsSwiper()
  })
}

const brands_tablet = document.querySelector('.brands')
const showButton_tablet = document.querySelector('.brands__button--start')
const hideButton_tablet = document.querySelector('.brands__button--end')

if (showButton_tablet && hideButton_tablet) {
  showButton_tablet.addEventListener('click', function () {
    brands_tablet.classList.add('brands--expanded--tablet')
  })
  if (brandsSwiper) {
    brandsSwiper.destroy(true, true)
    brandsSwiper = null
  }
  hideButton_tablet.addEventListener('click', function () {
    brands_tablet.classList.remove('brands--expanded--tablet')
  })
}
initBrandsSwiper()

document.addEventListener('DOMContentLoaded', function () {
  const informationSwiper = new Swiper('.information-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    pagination: {
      el: '.information-pagination',
      clickable: true
    }
  })
})

let servicesSwiper = null
const servicesContainer = document.querySelector('.services-swiper')

function initServicesSwiper() {
  if (window.innerWidth < 768) {
    if (!servicesSwiper && servicesContainer) {
      servicesSwiper = new Swiper('.services-swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        slidesPerView: 1,
        pagination: {
          el: '.services-pagination',
          clickable: true
        },
        debugger: true
      })
    }
  } else {
    if (servicesSwiper) {
      servicesSwiper.destroy(true, true)
      servicesSwiper = null

      if (servicesContainer) {
        const wrapper = servicesContainer.querySelector('.services-wrapper')
        if (wrapper) {
          wrapper.removeAttribute('style')
        }

        const slides = servicesContainer.querySelectorAll('.services-card')
        slides.forEach((slide) => {
          slide.removeAttribute('style')
        })
      }
    }
  }
}

initServicesSwiper()

window.addEventListener('resize', initServicesSwiper)

const article = document.querySelector('.page-end__article')
const showBtn = document.querySelector('.page-end__button--show')
const hideBtn = document.querySelector('.page-end__button--hide')

if (article && showBtn && hideBtn) {
  showBtn.addEventListener('click', function () {
    article.classList.add('page-end__article--expanded')
  })
  hideBtn.addEventListener('click', function () {
    article.classList.remove('page-end__article--expanded')
  })
}

const burgerBtn = document.querySelector('.page-navigation__button--burger')
const asideMenu = document.querySelector('.page-container')
const overlay = document.querySelector('.overlay')

function toggleMenu() {
  asideMenu.classList.toggle('page-container--active')
  overlay.classList.toggle('overlay--active')
}

if (burgerBtn && asideMenu && overlay) {
  burgerBtn.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)
}
