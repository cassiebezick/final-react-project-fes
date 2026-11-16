import MovieCard from "./MovieCard";

function Movies() {
  return (
    <main className="movies">
      <section aria-labelledby="movies-heading">
        <div className="movies__heading">
          <p className="movies__eyebrow">Explore the collection</p>
          <h1 id="movies-heading">Find your next great movie.</h1>
        </div>

        <div className="movies__grid">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </main>
  );
}

export default Movies;