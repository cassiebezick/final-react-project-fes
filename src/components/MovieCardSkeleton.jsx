import "./MovieCardSkeleton.css";

function MovieCardSkeleton() {
  return (
    <div className="movie-card movie-card-skeleton" aria-hidden="true">
      <div className="movie-card-skeleton__poster" />
      <div className="movie-card-skeleton__body">
        <div className="movie-card-skeleton__title" />
        <div className="movie-card-skeleton__year" />
      </div>
    </div>
  );
}

export default MovieCardSkeleton;