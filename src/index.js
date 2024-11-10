import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Для екранів менше 991px
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true, // додатково, якщо бажаєте динамічні кулі
        },
        navigation: false, // Вимкнути кнопки навігації
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // Для екранів 991px і більше
      991: {
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: false, // Вимкнути пагінацію
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
});