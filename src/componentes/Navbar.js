import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#proyecto">Proyecto</a></li>
        <li><a href="#imagenes">Imágenes</a></li>
        <li><a href="#modelo3d">Modelo 3D</a></li>
        <li><a href="#video">Video</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
