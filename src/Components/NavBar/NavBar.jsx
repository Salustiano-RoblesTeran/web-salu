import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1 className='logo'>Salustiano Robles Teran</h1>
        <input type="checkbox" id="menu-icon" className="menu-icon"/>
        <label htmlFor="menu-icon" className="menu-hamburguesa">
          <i className="bi bi-list"></i>
        </label>
        <ul>
          <li><a href="#">Sobre Mi</a></li>
          <li><a href="#">Mi Experiencia</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
