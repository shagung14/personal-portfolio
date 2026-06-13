import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbarGlass">

      <div className="logoText">
        SHAGUN GUPTA
      </div>

      <div className="navMenu">

        <Link to="/">Home</Link>

        <a href="#projects">
          Projects
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

    </nav>
  );
}