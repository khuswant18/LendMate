import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='navbar'>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">Lend<span className="logo-highlight">Mate</span></span>
          </a>
        </div>
        
        <div className='navbar-menu'>
          <ul className="navbar-links">
            <li><NavLink to="/signup">Get Started</NavLink></li>
          </ul>
          <div className="navbar-buttons">
            <NavLink to="/login" className="btn btn-outline">Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;