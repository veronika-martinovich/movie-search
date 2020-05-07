import { state } from "../state";
import { generateMovies } from "../movie_functions/generateMovies";

document
  .querySelector(".search")
  .addEventListener("submit", searchMovies);

function searchMovies(e) {
  e.preventDefault();
  if (document.querySelector(".search__text").value) {
    state.sliderNextPage = 1;
    state.searchQuery = document.querySelector(".search__text").value;
    generateMovies(["s", "page"], [state.searchQuery, state.sliderNextPage]);
  }
}
