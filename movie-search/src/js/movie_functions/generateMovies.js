import { getMovieData } from "./getMovieData";
import { Movie } from "../classes/Movie";
import {mySwiper} from '../classes/Swiper';

export async function generateMovies(searchFlags, searchQueries) {
  const mySwiper = document.querySelector('.swiper-container').swiper;
  const movieCards = await getMovieData(searchFlags, searchQueries);
  const movies = [];
  for (let movie of movieCards.Search) {
    const response = await getMovieData(["i"], [movie.imdbID]);
    movie.imdbRating = response.imdbRating;
    const newMovie = new Movie(movie);
    movies.push(newMovie.render());
  }
  movies.forEach(item => {
    mySwiper.appendSlide(item)
  })
 
}

generateMovies(['s', 'page'], ['star', '1']);
