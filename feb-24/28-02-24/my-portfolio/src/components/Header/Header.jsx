import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logoImg">
          <img
            src="https://i1.sndcdn.com/visuals-yDbk2r04GeDu5z8g-a1sRrg-t1240x260.jpg"
            alt=""
          />
        </div>
        <nav className="navigation">
          <span className="navHome">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </span>

          <span className="navAbout">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </span>
        </nav>
      </header>
    </>
  );
};
export default Header;
