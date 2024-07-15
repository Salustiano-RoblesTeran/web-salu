import React from 'react'
import './Perfil.css'

const Perfil = () => {
  return (
    <>
    <section id="profile">
      <div className="section__pic-container">
        <img src="../src/assets/img/profile.png" alt="Salustiano Robles Teran profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Mi nombre es </p>
        <h2 className="title">Salustiano Robles Teran</h2>
        <p className="section__text__p2">Soy estudiante de Ingeniería Informática, apasionado de la tecnología y el desarrollo de software. Recientemente completé un bootcamp de programación full stack, donde adquirí habilidades prácticas en diversas tecnologías y lenguajes de programación. Estoy en constante búsqueda de nuevos desafíos que me permitan aplicar y expandir mis conocimientos en el campo de la informática.</p>
        <div className="btn-container">
          <button className="btn btn-color-2">Download CV</button>
          <button className="btn btn-color-1">Contact Info</button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Perfil