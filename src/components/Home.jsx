import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import MovieHeader from "./MovieHeader";
import MoviesHomeGrid from "./MoviesHomeGrid";

function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  return (
    <main className="page-container">
      <MovieHeader />
      {query ? (
        <MovieSearchResults key={query} query={query} />
      ) : (
        <MoviesHomeGrid />
      )}
    </main>
  );
}

function MovieSearchResults({ query }) {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovies() {
      try {
        const params = new URLSearchParams({ q: query });
        const response = await fetch(`/api/movies?${params}`, {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Could not load movies.");
        }

        setMovies(data.movies);

      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      }
    }

    loadMovies();
    return () => controller.abort();
  }, [query]);

  if (error) return <p role="alert">{error}</p>;
  if (movies === null) return <MoviesHomeGrid isLoading />;
  if (movies.length === 0) return <p>No movies found for “{query}”.</p>;

  return <MoviesHomeGrid movies={movies} />;
}

export default Home;