import MovieCard from "./MovieCard";

function Movies({ movies }) {
  return (
    <section className="movies" aria-labelledby="movies-heading">
      <div className="movies__toolbar">
        <div>
          <h2 id="movies-heading">Explore movies</h2>
          <p>Movie search & discovery</p>
        </div>

        <div className="movies__sort">
          <label htmlFor="movie-sort">Sort:</label>

          <select id="movie-sort" defaultValue="default" disabled>
            <option value="default">Default</option>
            <option value="title-asc">A–Z</option>
            <option value="title-desc">Z–A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="movies__grid">
        {movies
          ? movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
          : Array.from({ length: 6 }, (_, index) => <MovieCard key={index} />)}
      </div>
    </section>
  );
}

export default Movies;