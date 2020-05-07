import { state } from "../page_functions_and_state/state";
import { updatePage } from "../page_functions_and_state/updatePage";
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
    updatePage(["s", "page"], [state.searchQuery, state.sliderNextPage], translated);
  }
}
