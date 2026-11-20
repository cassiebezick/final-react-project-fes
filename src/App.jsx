import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:imdbID" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;