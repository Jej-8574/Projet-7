import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Kasa" />
      </div>
      <div className="navbar__links">
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
      </div>
    </nav>
  );
}

export default Navbar;
