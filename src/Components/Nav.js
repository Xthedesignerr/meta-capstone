import React from 'react';
import './style.css';
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reserve">Reserve</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
