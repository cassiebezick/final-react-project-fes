import northboundPoster from "../assets/northbound.png";
import { FiArrowUpRight, FiArrowRight, FiFilm } from "react-icons/fi";
import { Link, useLocation } from "react-router";
import MoviePoster from "./MoviePoster";

function MovieCard( { movie } ) {
  const title = movie?.Title ?? "Northbound";
  const year = movie?.Year ?? "2024";
  const poster = movie ? movie.Poster : northboundPoster;
  const { search } = useLocation();

  return (
    <article className="movie-card">
      <div className="movie-card__ribbon" aria-hidden="true" />

      <div className="movie-card__header" aria-hidden="true">
        <span className="movie-card__label">
          <FiFilm />
        </span>

        <span className="movie-card__arrow">
          <FiArrowUpRight />
        </span>
      </div>

      <MoviePoster
        className="movie-card__poster"
        src={poster}
        title={title}
      />

      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__year">{year}</p>


      <Link
        className="movie-card__button"
        to={`/movies/${movie?.imdbID ?? "northbound"}${search}`}
        aria-label={`View Details for ${title}`}
      >
        <span>View details</span>
        <FiArrowRight aria-hidden="true" />
      </Link>

      </div>
    </article>
  );
}

export default MovieCard;