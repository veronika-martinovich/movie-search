import { FilmBorder } from "./FilmBorder";

export class Movie {
  constructor(props) {
    this.state = {
      title: props.Title,
      poster: props.Poster,
      year: props.Year,
      imdbID: props.imdbID,
      rate: props.imdbRating,
    };
  }

  render() {
    return ` <div class="movie swiper-slide">
          ${new FilmBorder(15).render()}
          <div class="movie__content">
            <div class="movie__poster" style="background-image: url(${
              this.state.poster
            }), url('./src/img/dummy-image.jpg')" ></div>
            <h4 class="movie__title">${this.state.title}</h4>
            <p class="movie__year">${this.state.year}</p>
            <div class="movie__rate">${this.state.rate}</div>
          </div>
          ${new FilmBorder(15).render()}
        </div>`;
  }
}
