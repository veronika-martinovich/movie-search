import { state } from "../state";
import { generateMovies } from "../movie_functions/generateMovies";
import { translateMovie } from "../movie_functions/translateMovie";

document
  .querySelector(".search")
  .addEventListener("submit", searchMovies);

async function searchMovies(e) {
  e.preventDefault();
  let searchText = document.querySelector(".search__text").value;
  let translated = false;
  if (searchText) {
    if (searchText.match(/[а-яА-Я0-9]/ig)) {
      searchText = await translateMovie(searchText);
      translated = true;
    }    
    state.sliderNextPage = 1;
    state.searchQuery = searchText;
    console.log(state.searchQuery);
    generateMovies(["s", "page"], [state.searchQuery, state.sliderNextPage], translated);
  }
}
