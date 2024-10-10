import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">RetroMoto</a>
        <button className="hamburger" onClick={toggleNavbar}>
          &#9776;
        </button>
      </div>
      <ul className={isOpen ? 'open' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#link">Link</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
