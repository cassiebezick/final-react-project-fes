import logo from "../assets/movie.gif"
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="header-left">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <div className="header__name">
            scenescout
            </div>
        </div>

        <div className="header-right">
            <div className="header__search-wrapper">
                <input
                  type="search"
                  placeholder="Search movies..."
                  className="header__search"
                  aria-label="Search movies"
                />
                <button 
                  className="header__button"
                >
                <FaSearch
                  className="header__search-icon"
                  aria-hidden="true"
                />
                </button>
            </div>
        </div>
    
    </header>
  );
}

export default Header;