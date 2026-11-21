import '../scss/style.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import Swiper from 'swiper'

let swiper = null
const swiperContainer = document.querySelector('.brands__swiper')

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper && swiperContainer) {
      swiper = new Swiper('.brands__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true)
      swiper = null

      if (swiperContainer) {
        const wrapper = swiperContainer.querySelector('.swiper-wrapper')
        if (wrapper) {
          wrapper.removeAttribute('style')
        }

        const slides = swiperContainer.querySelectorAll('.swiper-slide')
        slides.forEach((slide) => {
          slide.removeAttribute('style')
        })
      }
    }
  }
}

window.addEventListener('resize', initSwiper)

const brands = document.querySelector('.brands')
const showButton = document.querySelector('.brands__button--start')
const hideButton = document.querySelector('.brands__button--end')

if (showButton && hideButton) {
  showButton.addEventListener('click', function () {
    brands.classList.add('brands--expanded')
  })
  if (swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
  hideButton.addEventListener('click', function () {
    brands.classList.remove('brands--expanded')
  })
}

const brands_tablet = document.querySelector('.brands')
const showButton_tablet = document.querySelector('.brands__button--start')
const hideButton_tablet = document.querySelector('.brands__button--end')

if (showButton_tablet && hideButton_tablet) {
  showButton_tablet.addEventListener('click', function () {
    brands_tablet.classList.add('brands--expanded--tablet')
  })
  if (swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
  hideButton_tablet.addEventListener('click', function () {
    brands_tablet.classList.remove('brands--expanded--tablet')
  })
}
initSwiper()
