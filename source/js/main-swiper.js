// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';
import 'swiper/css';

const makeSwiperJuri = () => {
  new Swiper('.juri__slider-container', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Keyboard],

    navigation: {
      nextEl: '.juri__button-slider--next',
      prevEl: '.juri__button-slider--prev',
    },

    touchRatio: 1,
    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    slidesPerView: 2,
    initialSlide: 0,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        initialSlide: 0,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
        slidesPerGroup: 2,
        simulateTouch: false,
      }
    },
  });
};


const makeSwiperReviews = () => {
  new Swiper('.reviews__slider-container', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Keyboard],

    navigation: {
      nextEl: '.reviews__button-slider--next',
      prevEl: '.reviews__button-slider--prev',
    },

    touchRatio: 1,
    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 20,
  });
};

export { makeSwiperJuri, makeSwiperReviews};
