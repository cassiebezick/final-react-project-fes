import MovieHeader from "./MovieHeader";
import MoviesHomeGrid from "./MoviesHomeGrid";

function Home() {
  return (
    <main className="page-container">
      <MovieHeader />
      <MoviesHomeGrid />
    </main>
  );
}

export default Home;