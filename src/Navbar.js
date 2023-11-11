import React, { useState } from 'react';
import logo from "./icons/logo.svg";
import hamburgerMenu from "./icons/icon-hamburger.svg";
import '../src/styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <div className="Navbar">
      <NavLink to="/" exact activeClassName="">
        <img src={logo} className="logo" alt="logo" />
      </NavLink>
      <img
        src={hamburgerMenu}
        alt="hamburger-icon"
        className={`hamburger-icon ${isHamburgerMenuOpen ? 'hide' : ''}`}
        onClick={toggleHamburgerMenu}
      />
      <div className="nav-line"></div>
      <ul className={`nav-links ${isHamburgerMenuOpen ? 'open' : ''}`}>
        <li className="close-icon" onClick={toggleHamburgerMenu}>
          X
        </li>
        <NavLink to="/" exact activeClassName="default-active" onClick={toggleHamburgerMenu}>
          <li className="home-link">
            <span>00</span>HOME
          </li>
        </NavLink>
        <NavLink to="/destination" activeClassName="active-link" onClick={toggleHamburgerMenu}>
          <li>
            <span>01</span>DESTINATION
          </li>
        </NavLink>
        <NavLink to="/crew" activeClassName="active-link" onClick={toggleHamburgerMenu}>
          <li>
            <span>02</span>CREW
          </li>
        </NavLink>
        <NavLink to="/technology" activeClassName="active-link" onClick={toggleHamburgerMenu}>
          <li>
            <span>03</span>TECHNOLOGY
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
