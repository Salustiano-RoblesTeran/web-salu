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
        <p className="section__text__p1">Hola! mi nombre es</p>
        <h1 className="title">Salustiano Robles Teran</h1>
        <p className="section__text__p2">Full Stack Developer</p>
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