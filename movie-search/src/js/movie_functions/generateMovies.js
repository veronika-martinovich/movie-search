import { getMovieData } from "./getMovieData";
import { Movie } from "../classes/Movie";
import { state } from "../state";
import { mySwiper } from "../classes/Swiper";
import { addSpinner } from "../spinner_functions/addSpinner";
import { removeSpinner } from "../spinner_functions/removeSpinner";
import { showMessage } from "../message_functions/showMessage";
import { hideMessage } from "../message_functions/hideMessage";

generateMovies(
  ["s", "page", "type"],
  [state.searchQuery, state.sliderNextPage, "movie"]
);

export async function generateMovies(searchFlags, searchQueries) {
  try {
    hideMessage();
    addSpinner();
    state.fetchingPage = true;
    const movieData = await getMovieData(searchFlags, searchQueries);
    if (movieData.Response === "True") {
      const movies = [];
      state.sliderTotalMovies = Number(movieData.totalResults);
      for (let movie of movieData.Search) {
        if (movie.Poster === "N/A") continue;
        const response = await getMovieData(["i"], [movie.imdbID]);
        movie.imdbRating =
          response.imdbRating === "N/A" ? "" : response.imdbRating;
        const newMovie = new Movie(movie);
        movies.push(newMovie.render());
      }
      if (state.sliderNextPage === 1) {
        mySwiper.removeAllSlides();
      }
      movies.forEach((item) => {
        mySwiper.appendSlide(item);
      });
      mySwiper.update();
      state.sliderNextPage++;
    } else if (movieData.Response === "False") {
      showMessage(`No results for "${state.searchQuery}"`)
    }
    removeSpinner();
    state.fetchingPage = false;
  } catch (err) {
    showMessage("Something went wrong. Please, try again later.")
    console.log(err);
  }
}
