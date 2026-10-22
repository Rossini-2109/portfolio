
import { NavLink } from "react-router-dom";
import {useTheme} from "../context/ThemeContext";

function Navbar() {
  const{theme,toggleTheme}=useTheme();
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Rossini<span>.</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Navbar;
