import "./navbar.css";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoImg} alt="Kasa" />
      </div>
      <div className="navbar__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
