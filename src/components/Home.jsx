import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import MovieHeader from "./MovieHeader";
import MoviesHomeGrid from "./MoviesHomeGrid";


const DEFAULT_QUERY = "mountains";

function Home() {
  const [searchParams] = useSearchParams();
  const submittedQuery = searchParams.get("q")?.trim();
  const query = submittedQuery || DEFAULT_QUERY;

  return (
    <main className="page-container">
      <MovieHeader />
      <MovieSearchResults key={query} query={query} />
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