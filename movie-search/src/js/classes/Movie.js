import { FilmBorder } from "./FilmBorder";

export class Movie {
  constructor(props) {
    this.state = {
      title: props.Title,
      poster: props.Poster,
      year: props.Year,
      imdbID: props.imdbID,
      rate: props.imdbRating
    }
  }

  render() {
    return ` <div class="movie">
          ${new FilmBorder(15).render()}
          <div class="movie__content">
            <div class="movie__poster" style="background-image: url(${this.state.poster})"></div>
            <h4 class="movie__title">${this.state.title}</h4>
            <p class="movie__year">${this.state.year}</p>
            <div class="movie__rate">${this.state.rate}</div>
          </div>
          ${new FilmBorder(15).render()}
        </div>` 
  }

  
  /* constructor(title, poster, year, imdbID) {
    this.title = title;
    this.poster = poster;
    this.year = year;
    this.imdbID = imdbID;
    this.rate = "";
    this.movie = "";
    this.movieLeftBorder = "";
    this.movieRightBorder = "";
    this.movieContent = "";
    this.movieTitle = "";
    this.moviePoster = "";
    this.movieYear = "";
    this.movieRate = "";
  }

  createMovie() {
    this.movie = document.createElement("div");
    this.movie.className = "movie";

    this.movieLeftBorder = new FilmBorder(15).createFilmBorder();
    this.movieRightBorder = new FilmBorder(15).createFilmBorder();
    this.movieContent = document.createElement("div");
    this.movieContent.className = "movie__content";

    this.movieTitle = document.createElement("h4");
    this.movieTitle.className = "movie__title";
    this.movieTitle.textContent = this.title;
    this.moviePoster = document.createElement("div");
    this.moviePoster.className = "movie__poster";
    this.moviePoster.setAttribute(
      "style",
      `background-image: url(${this.poster})`
    );
    this.movieYear = document.createElement("p");
    this.movieYear.className = "movie__year";
    this.movieYear.textContent = this.year;

    this.movieContent.append(this.moviePoster, this.movieTitle, this.movieYear);
    this.movie.append(
      this.movieLeftBorder,
      this.movieContent,
      this.movieRightBorder
    );
    return this.movie;
  }

  async getRate() {
    const rate = await getMovieData(["i"], [this.imdbID]).then(
      (response) => {
        response.json();
      }
    );
    console.log(rate);
    this.movieRate = document.createElement("div");
    this.movieRate.className = "movie__rate";
    this.movieRate.textContent = this.rate;
    this.movieContent.append(this.movieRate);
    return this.movieRate;
  } */

}
