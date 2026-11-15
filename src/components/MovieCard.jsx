import poster from "../assets/northbound.png";
import { FiArrowUpRight, FiArrowRight, FiFilm } from "react-icons/fi";


function MovieCard() {
  return (
    <article className="movie-card">
      <div className="movie-card__ribbon" aria-hidden="true" />

      <div className="movie-card__header">
        <span className="movie-card__label">Scene Scout</span>

        <span className="movie-card__arrow" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </div>

      <img
        src={poster}
        alt="Northbound movie poster"
        className="movie-card__poster"
      />

      <div className="movie-card__content">
        <h2 className="movie-card__title">Northbound</h2>

        <p className="movie-card__metadata">
          2024 · Adventure, Drama
        </p>

        <p className="movie-card__description">
          A journey beyond the familiar, into the wild.
        </p>

        <button type="button" className="movie-card__button">
          <FiFilm aria-hidden="true" />
          <span>Explore movie</span>
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default MovieCard;

