import logo from "../assets/movie.gif";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Header() {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

  const query = searchText.trim();
    if (!query) return;

  const params = new URLSearchParams({ q: query });
  navigate(`/?${params}`);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand"> 
          <img src={logo} alt="" />
          <span>scenescout</span>
        </Link>

        <div className="header__search-wrapper">
          <form onSubmit={handleSearch} role="search">
          <input
            type="search"
            placeholder="Search for a movie..."
            className="header__search"
            aria-label="Search movies"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <button
            type="submit"
            className="header__button"
            aria-label="Search movies"
          >
            <FaSearch aria-hidden="true" />
          </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;