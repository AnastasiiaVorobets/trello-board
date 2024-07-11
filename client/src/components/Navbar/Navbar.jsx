import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <div className="header__logo">Trello</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="/error" className="header__nav-link">Error</a>
          </li>
          <li className="header__nav-item">
            <a href="/error" className="header__nav-link">Error</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
