import Swiper from "../../../node_modules/swiper/js/swiper";
import { updatePage } from "../page_functions_and_state/updatePage";
import { state } from "../page_functions_and_state/state";

export const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 35,
  allowTouchMove: true,
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
