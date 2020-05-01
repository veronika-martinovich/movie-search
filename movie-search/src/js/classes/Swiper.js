import Swiper from '../../../node_modules/swiper/js/swiper';

export const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
