import Swiper from "../../../node_modules/swiper/js/swiper";
import { updatePage } from "../page_functions_and_state/updatePage";
import { state } from "../page_functions_and_state/state";

export const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  allowTouchMove: true,
  breakpoints: {
    // when window width is >= 1288px
    1288: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 35
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

mySwiper.on("slideChange", async function () {
  if (
    mySwiper.slides.length - mySwiper.activeIndex <= state.remainingMovies &&
    state.sliderNextPage <= Math.ceil(state.sliderTotalMovies / state.moviesPerPage) &&
    !state.fetchingPage
  ) {
    await updatePage(
      ["s", "page"],
      [`${state.searchQuery}`, `${state.sliderNextPage}`]
    );
  }
});
