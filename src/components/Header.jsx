import logo from "../assets/movie.gif";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          <img src={logo} alt="" />
          <span>scenescout</span>
        </a>

        <div className="header__search-wrapper">
          <input
            type="search"
            placeholder="Search for a movie..."
            className="header__search"
            aria-label="Search movies"
          />

          <button
            type="button"
            className="header__button"
            aria-label="Search movies"
          >
            <FaSearch aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;