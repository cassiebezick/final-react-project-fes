import { Link, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";

import { FiArrowLeft, FiStar } from "react-icons/fi";
import poster from "../assets/northbound.png";

import "./MovieDetails.css";

const sampleMovie = {
  Title: "Northbound",
  Year: "2024",
  Runtime: "108 min",
  Rated: "PG-13",
  Genre: "Adventure, Drama",
  imdbRating: "7.8",
  Plot: "After a storm cuts off her route home, a solo hiker follows an abandoned trail through the Alaskan wilderness.",
  Director: "Maya Ellis",
  Actors: "Avery Cole, Jordan Reed",
  Language: "English",
  Poster: poster,
};

function MovieDetails() {
  const { imdbID } = useParams();
  const isSampleMovie = imdbID === "northbound";
  const [result, setResult] = useState(null);
  const { search } = useLocation();

    useEffect(() => {
    if (isSampleMovie) return;

    const controller = new AbortController();

    async function loadMovie() {
      try {
        const params = new URLSearchParams({ id: imdbID });
        const response = await fetch(`/api/movies?${params}`, {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!response.ok || !data.movie) {
          throw new Error(data.error || "Could not load this movie.");
        }

        setResult({ imdbID, movie: data.movie });

      } catch (error) {
        if (controller.signal.aborted) return;

        setResult({ imdbID, error: error.message });
      }
    }

    loadMovie();

    return () => controller.abort();
  }, [imdbID, isSampleMovie]);

  const currentResult = result?.imdbID === imdbID ? result : null;
  const movie = isSampleMovie ? sampleMovie : currentResult?.movie;
  const error = currentResult?.error;

  const genres =
    movie?.Genre && movie.Genre !== "N/A"
      ? movie.Genre.split(",").map((genre) => genre.trim())
      : [];

  return (
    <>
      <main className="page-container movie-details">
        <Link className="movie-details__back" to={`/${search}`}>
          <FiArrowLeft aria-hidden="true" />
          Back to movies
        </Link>
        {error && <p role="alert">{error}</p>}
        {!movie && !error && <p role="status">Loading movie details…</p>}

      {movie && (
          <>

        <section className="movie-details__hero" aria-labelledby="movie-title">
          <img
            className="movie-details__poster"
            src={movie.Poster}
            alt={`${movie.Title} movie poster`}
          />

          <div className="movie-details__overview">
            <h1 id="movie-title">{movie.Title}</h1>

            <p className="movie-details__meta">
              {movie.Year} · {movie.Runtime} · {movie.Rated}
            </p>

            <ul className="movie-details__tags" aria-label="Genres and rating">
              {genres.map((genre) => (
                <li key={genre} className="movie-details__genre">
                  {genre}
                </li>
              ))}
              <li className="movie-details__rating">
                <FiStar aria-hidden="true" />
                {movie.imdbRating} / 10 IMDb
              </li>
            </ul>

            <h2>Synopsis</h2>
            <p className="movie-details__plot">{movie.Plot}</p>
          </div>
        </section>

        <section className="movie-details__info" aria-labelledby="movie-info">
          <h2 id="movie-info">Movie details</h2>

          <dl className="movie-details__credits">
            <div>
              <dt>Director</dt>
              <dd>{movie.Director}</dd>
            </div>
            <div>
              <dt>Starring</dt>
              <dd>{movie.Actors}</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>{movie.Language}</dd>
            </div>
          </dl>
        </section>
        
      </>
      )}

      </main>
    </>
  );
}

export default MovieDetails;