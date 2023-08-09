import React from 'react';
import { Link } from "react-router-dom";
import '../styles/pages/Landing.scss';


function Works() {
  return (
    <div className="container">
        <header className='container__header'>
          <h1 className='container__header--title'> ✌️ Hola soy Aida, <br /> Junior Front-end Developer</h1>
          <p className='container__header--icon'>🌩️</p>
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
          
        </main>
      </div>
  );
}

export default Works;