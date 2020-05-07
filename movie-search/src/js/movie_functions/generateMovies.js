import { Movie } from "../classes/Movie";
import { mySwiper } from "../classes/Swiper";
import { showMessage } from "../message_functions/showMessage";
import { getMovieData } from "../movie_functions/getMovieData";
import { state } from "../page_functions_and_state/state";

export async function generateMovies(movieData) {
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
    showMessage(`No results for "${state.searchQuery}"`);
  }
}
