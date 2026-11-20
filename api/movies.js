export default {
  async fetch(request) {
    const searchParams = new URL(request.url).searchParams;
    const query = searchParams.get("q")?.trim();
    const id = searchParams.get("id")?.trim();

    if (!query && !id) {
      return Response.json(
        { error: "Enter a movie title or IMDb ID." },
        { status: 400 },
      );
    }

    const apiKey = process.env.OMDB_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "Movie search is not configured." }, { status: 500 });
    }

    const params = new URLSearchParams({ apikey: apiKey });

    if (id) {
      params.set("i", id);
      params.set("plot", "full");
    } else {
      params.set("s", query);
      params.set("type", "movie");
    }

    try {
      const response = await fetch(`https://www.omdbapi.com/?${params}`);
      const data = await response.json();

    if (response.ok && data.Error === "Movie not found!") {
      if (id) {
        return Response.json({ error: "Movie not found." }, { status: 404 });
      }

      return Response.json({ movies: [] });
    }

    if (!response.ok || data.Response !== "True") {
      return Response.json(
        { error: data.Error || "Could not load movies." },
        { status: 502 },
      );
    }

    if (id) {
      return Response.json({ movie: data });
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