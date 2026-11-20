import poster from "../assets/northbound.png";
import { FiArrowUpRight, FiArrowRight, FiFilm } from "react-icons/fi";

function MovieCard() {
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

      <img
        src={poster}
        alt="Northbound movie poster"
        className="movie-card__poster"
      />

      <div className="movie-card__content">
        <h3 className="movie-card__title">Northbound</h3>
        <p className="movie-card__year">2024</p>

        <button
          type="button"
          className="movie-card__button"
          aria-label="View details for Northbound"
        >
          <span>View details</span>
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default MovieCard;