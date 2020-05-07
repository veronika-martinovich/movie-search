import { getMovieData } from "../movie_functions/getMovieData";
import { generateMovies } from "../movie_functions/generateMovies";
import { state } from "./state";
import { addSpinner } from "../spinner_functions/addSpinner";
import { removeSpinner } from "../spinner_functions/removeSpinner";
import { showMessage } from "../message_functions/showMessage";
import { hideMessage } from "../message_functions/hideMessage";

updatePage(
  ["s", "page", "type"],
  [state.searchQuery, state.sliderNextPage, "movie"],
  false
);

export async function updatePage(searchFlags, searchQueries, translated) {
  try {
    hideMessage();
    state.fetchingPage = true;
    addSpinner();
    if (translated) {
      showMessage(`Showing results for "${state.searchQuery}".`);
    }
    const movieData = await getMovieData(searchFlags, searchQueries);
    await generateMovies(movieData);
    state.fetchingPage = false;
    removeSpinner();
  } catch (err) {
    showMessage("Something went wrong. Please, try again later.");
    console.log(err);
  }
}
