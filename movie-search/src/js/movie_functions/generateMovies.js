import { getMovieData } from "./getMovieData";
import { Movie } from "../classes/Movie";

export async function generateMovies(searchFlags, searchQueries) {
  const movieContainer = document.querySelector('.movie-container');
  const movieCards = await getMovieData(searchFlags, searchQueries);
  const movies = [];
  for (let movie of movieCards.Search) {
    const response = await getMovieData(["i"], [movie.imdbID]);
    movie.imdbRating = response.imdbRating;
  }
  movieCards.Search.forEach(item => {
    console.log(item.imdbRating)
    const movie = new Movie(item);
    movieContainer.innerHTML += movie.render();
    movies.push(movie);
  })
}

generateMovies(['s', 'page'], ['star', '1']);
