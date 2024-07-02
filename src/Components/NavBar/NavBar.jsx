import React from 'react'

import './NavBar.css'

const NavBar = () => {
  return (
    <>
        <header>
            <nav>
                <h1>Salustiano Robles Teran</h1>

                <input type="checkbox" id="menu-toggle"/>
                <label className="menu-icon"><i className="fas fa-bars"></i></label>

                <ul>
                    <li><a href="#">Sobre Mi</a> <i className="fas fa-bars"></i></li>
                    <li><a href="#">Mi Experiencia</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default NavBar