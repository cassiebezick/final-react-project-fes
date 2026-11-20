import { useState } from "react";
import "./MoviePoster.css";

function MoviePoster({ src, title, className = "" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const posterUrl = src?.trim();
  const hasPoster =
    posterUrl && posterUrl !== "N/A" && posterUrl !== failedSrc;

  if (!hasPoster) {
    return (
      <div className={`${className} movie-poster__fallback`}>
        No poster available
      </div>
    );
  }

  return (
    <img
      className={className}
      src={posterUrl}
      alt={`${title} movie poster`}
      onError={() => setFailedSrc(posterUrl)}
    />
  );
}

export default MoviePoster;