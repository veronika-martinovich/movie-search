import Swiper from "../../../node_modules/swiper/js/swiper";
import { generateMovies } from "../movie_functions/generateMovies";
import { state } from "../state";

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
    mySwiper.slides.length - mySwiper.activeIndex <= 6 &&
    state.sliderNextPage <= Math.ceil(state.sliderTotalMovies / 10)
  ) {
    await generateMovies(
      ["s", "page"],
      [`${state.searchQuery}`, `${state.sliderNextPage}`]
    );
  }
});
