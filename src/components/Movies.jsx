import MovieCard from "./MovieCard";

function Movies() {
  return (
    <main className="movies">
        <div className="movies__grid">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
   
    </main>
  );
}

export default Movies;