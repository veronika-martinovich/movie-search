import { getMovieData } from "./getMovieData";
import { Movie } from "../classes/Movie";
import { state } from "../state";
import {mySwiper } from "../classes/Swiper";

generateMovies(['s', 'page', 'type'], [state.searchQuery, state.sliderNextPage, 'movie']);

export async function generateMovies(searchFlags, searchQueries) {
  try {
    const movieCards = await getMovieData(searchFlags, searchQueries);
    state.sliderTotalMovies = Number(movieCards.totalResults);
    const movies = [];
    console.log(movieCards)
    for (let movie of movieCards.Search) {
      const response = await getMovieData(["i"], [movie.imdbID]);
      movie.imdbRating = response.imdbRating == "N/A" ? '' : response.imdbRating;
      const newMovie = new Movie(movie);
      movies.push(newMovie.render());
    };
    movies.forEach(item => {
      mySwiper.appendSlide(item)
    });
    mySwiper.update();
    state.sliderNextPage++;
    console.log(state.sliderTotalMovies, state.sliderNextPage)
  } catch(err) {
    console.log(err)
  }
  
}
