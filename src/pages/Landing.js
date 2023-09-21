import React from 'react';
import { Link } from "react-router-dom";
import '../styles/pages/Landing.scss';
import cloud from "../images/Rayito.png";


function Works() {
  return (
    <div className="container">
        <header className='container__header'>
          <h1 className='container__header--title'> ✌️ Hola soy Aida, <br /> Junior Front-end Developer</h1>
          <img src={cloud} alt="" className='container__header--img'/>
          <p className='container__header--text'>En mi portfolio podrás encontrar trabajos realizados con <strong>HTML5, JS, React, CSS3, SASS, NodeJS y SQL</strong></p>
        </header>
        <main className='container__main'>
          <ul className='buttonContainer'>
            <Link className='buttonContainer__button' to="/works">
              <li>works</li>
            </Link>
            <Link className='buttonContainer__button' to="/contact">
              <li>contact</li>
            </Link>
            
          </ul>
          <p className='resumeText'>En mi experiencia previa dentro del mundo del arte, he podido desarrollar la creatividad y el trabajo en equipo. Sin embargo, mi curiosidad por la tecnología me ha llevado hacia la programación web y de videojuegos.
          <br />
          <br />
          Mi paso por Adalab ha reforzado mis conocimientos y me siento preparada para seguir creciendo en este campo. Mi objetivo es fusionar creatividad y lógica en proyectos emocionantes y desafiantes. Estoy entusiasmada por continuar aprendiendo y contribuyendo en el mundo de la programación.</p>
          
        </main>
      </div>
  );
}

export default Works;