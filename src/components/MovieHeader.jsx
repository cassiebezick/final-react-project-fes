function MovieHeader() {
  return (
    <section className="movie-hero" aria-labelledby="hero-heading">
      <div className="movie-hero__content">
        <p className="movies__eyebrow">Explore the collection</p>

        <h1 id="hero-heading">
          Find your next <span>great movie.</span>
        </h1>

        <p className="movie-hero__description">
          Discover a story worth getting lost in.
        </p>
      </div>
    </section>
  );
}

export default MovieHeader;