import { state } from "../state";
import { mySwiper } from "../classes/Swiper";
import { generateMovies } from "../movie_functions/generateMovies";

document
  .querySelector(".search__button")
  .addEventListener("click", searchMovies);

document.addEventListener("keydown", handleKeydown);

function handleKeydown() {
  if (event.code === "Enter") {
    searchMovies();
  }
}

function searchMovies() {
  if (document.querySelector(".search__text").value) {
    state.sliderNextPage = 1;
    state.searchQuery = document.querySelector(".search__text").value;
    mySwiper.removeAllSlides();
    generateMovies(["s", "page"], [state.searchQuery, state.sliderNextPage]);
  }
}
