import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";



function Movies({ movies, isLoading = false }) {
  
  const [sortBy, setSortBy] = useState("default");

  const sortedMovies = [...(movies ?? [])];

  switch (sortBy) {
    case "title-asc":
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
      break;

    case "title-desc":
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
      break;

    case "newest":
      sortedMovies.sort(
      (a, b) => Number.parseInt(b.Year, 10) - Number.parseInt(a.Year, 10),
      );
      break;

    case "oldest":
      sortedMovies.sort(
      (a, b) => Number.parseInt(a.Year, 10) - Number.parseInt(b.Year, 10),
      );
      break;

    default:
    break;
}

    let cards;

    if (isLoading) {
      cards = Array.from({ length: 6 }, (_, index) => (
        <MovieCardSkeleton key={index} />
      ));
    } else if (movies) {
      cards = movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ));
    } else {
      cards = Array.from({ length: 6 }, (_, index) => (
        <MovieCard key={index} />
      ));
    }
  
  return (
    <section className="movies" aria-labelledby="movies-heading">
      <div className="movies__toolbar">
        <div>
          <h2 id="movies-heading">Explore movies</h2>
          <p>Movie search & discovery</p>
        </div>

        <div className="movies__sort">
          <label htmlFor="movie-sort">Sort:</label>

          <select
            id="movie-sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            disabled={!movies?.length}
          >
          <option value="default">Default</option>
          <option value="title-asc">A–Z</option>
          <option value="title-desc">Z–A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          </select>
       
        </div>
      </div>

     {isLoading && <p role="status">Loading movies…</p>}

      <div className="movies__grid" aria-busy={isLoading}>
        {cards}
      </div>
      
    </section>
  );
}

export default Movies;