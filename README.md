# Scene Scout

Scene Scout is a movie discovery app built with React and powered by the Open Movie Database (OMDb). It opens with a collection of movies matching “mountains.” From there, you can search by title, sort the results, and open a movie’s detail page to see its synopsis, cast, and IMDb rating.

[Live demo](https://final-react-project-fes.vercel.app/)

## Features

- **Movie search** with live results from OMDb.
- **Sorting** by title A–Z or Z–A and by release year, newest or oldest first.
- **Movie detail pages** with the poster, runtime, genres, synopsis, director, cast, and IMDb rating when available.
- **Search-friendly navigation** that keeps the submitted title in the URL, so refreshing or using **Back to movies** restores the search.
- **Skeleton loading states** for the results grid and movie detail pages, plus fallback artwork for missing posters.
- **Responsive layouts** for desktop, tablet, and mobile.

## Built with

- React and Vite
- React Router
- CSS
- React Icons
- OMDb API
- Vercel Functions

## How it works

The search form saves the submitted title in the URL as `?q=avengers`. React reads that query and requests results from `/api/movies`. Clicking a result opens `/movies/:imdbID`, where the detail page uses the IMDb ID to fetch the full movie record.

| Action | App request | OMDb lookup |
| --- | --- | --- |
| Search by title | `/api/movies?q=avengers` | `s=avengers` |
| Load a movie’s details | `/api/movies?id=tt0848228` | `i=tt0848228` |

The Vercel function handles both requests and reads `OMDB_API_KEY` on the server. Sorting runs in React using the results already loaded in the grid.

## Run locally

1. Clone the repository and install dependencies.

   ```bash
   git clone https://github.com/cassiebezick/final-react-project-fes.git
   cd final-react-project-fes
   npm install
   ```

2. [Request an OMDb API key](https://www.omdbapi.com/apikey.aspx) and activate it using the link in the OMDb email.

3. Link the local folder to a Vercel project you can access.

   ```bash
   npx vercel link
   ```

4. In that project’s **Settings → Environment Variables**, add `OMDB_API_KEY` to the **Development** environment. Use the **Production** environment too if you’re deploying your own copy.

5. Start the app and its API function together.

   ```bash
   npx vercel dev
   ```

   Open the local URL printed in the terminal. To test the API directly, append `/api/movies?q=avengers` to that URL. You should see a JSON response with a `movies` array.

## What I learned

I built Scene Scout for my Frontend Simplified React final project. Connecting search to a detail page taught me how to use the URL for two different pieces of information. The search query tells the homepage which movies to display, and the IMDb ID tells the detail page which movie to load.

I also got practice handling loading, empty, and error states, sorting an array without mutating the original results, and using a Vercel function to keep an API key on the server.

## Credits

Built by [Cassie Bezick](https://github.com/cassiebezick). Movie data and poster URLs are provided by [OMDb](https://www.omdbapi.com/).