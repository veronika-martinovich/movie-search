import { getMovieData } from "./getMovieData";
import { Movie } from "../classes/Movie";
import { state } from "../state";
import { mySwiper } from "../classes/Swiper";
import { addSpinner } from "../spinner_functions/addSpinner";
import { removeSpinner } from "../spinner_functions/removeSpinner";

generateMovies(
  ["s", "page", "type"],
  [state.searchQuery, state.sliderNextPage, "movie"]
);

export async function generateMovies(searchFlags, searchQueries) {
  try {
    addSpinner();
    state.fetchingPage = true;
    const movieCards = await getMovieData(searchFlags, searchQueries);
    if (movieCards.Response === "True") {
      const movies = [];
      state.sliderTotalMovies = Number(movieCards.totalResults);
      console.log('next page', state.sliderNextPage, movieCards);
      for (let movie of movieCards.Search) {
        const response = await getMovieData(["i"], [movie.imdbID]);
        movie.imdbRating =
          response.imdbRating == "N/A" ? "" : response.imdbRating;
        const newMovie = new Movie(movie);
        movies.push(newMovie.render());
      }
      removeSpinner();
      state.fetchingPage = false;
      movies.forEach((item) => {
        mySwiper.appendSlide(item);
      });
      mySwiper.update();
      state.sliderNextPage++;
    } else {
      showMessage("")
    }
  } catch (err) {
    console.log(err);
  }
}
