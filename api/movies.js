export default {
  async fetch(request) {
    const query = new URL(request.url).searchParams.get("q")?.trim();

    if (!query) {
      return Response.json({ error: "Enter a movie title." }, { status: 400 });
    }

    const apiKey = process.env.OMDB_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "Movie search is not configured." }, { status: 500 });
    }

    const params = new URLSearchParams({
      apikey: apiKey,
      s: query,
      type: "movie",
    });

    try {
      const response = await fetch(`https://www.omdbapi.com/?${params}`);
      const data = await response.json();

      if (data.Error === "Movie not found!") {
        return Response.json({ movies: [] });
      }

      if (!response.ok || data.Response !== "True") {
        return Response.json(
          { error: data.Error || "Could not load movies." },
          { status: 502 },
        );
      }

      return Response.json({ movies: data.Search });
    } catch {
      return Response.json(
        { error: "Could not reach the movie database." },
        { status: 502 },
      );
    }
  },
};