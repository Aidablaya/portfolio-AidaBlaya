import React, { useState } from 'react';
import { Link } from "react-router-dom";
import videoGame from '../images/gamegif.gif'; 
import '../styles/pages/Works.scss';
import proyectoCss from '../images/proyectoCssGif.gif';
import proyectoJS from '../images/proyectoJSGif.gif';
import proyectoReact from '../images/proyectoRyMGif.gif';
import proyectoE1 from '../images/proyectoE1Gif.gif';
import proyectoE3 from '../images/proyectoE3Gif.gif';
import proyectBob from '../images/proyectoBobGif.gif';
import iconRow from '../images/icono-flecha.svg';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideEquipWork, setCurrentSlideEquipWork] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };
  const handleNextEquipWork = () => {
    setCurrentSlideEquipWork((prevSlide) => prevSlide + 1);
  };

  const handlePrevEquipWork = () => {
    setCurrentSlideEquipWork((prevSlide) => prevSlide - 1);
  };
  
  

  return (
    <div>
      <main className='motherBox'>
        <section className='motherBox__principal'>
          <div className='boxprincipal'>
            <h2 className='boxprincipal__title'>Trabajo en curso <span className="rotating-icon">⏳</span></h2>
            <img className='img' src={videoGame} alt="" />
            <p>Rainbow Pot: Juego en proceso </p>
            <button  className='boxprincipal__button'>Te dejo el <a href='https://aidablaya.github.io/trabajo-final-individual-game/'>link</a> 👀</button>
          </div>
        </section>

        <section className='motherBox__mywork'>
          <div className='boxmywork'>
            <h2 className='boxmywork__title'>Trabajos anteriores 📚</h2>
            <ul className='boxmywork__list'>
              <li className={`boxmywork__list--li ${currentSlide !== 0 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectoCss} alt="" />
                <p>Maquetación: CSS <a href="http://beta.adalab.es/modulo-1-evaluacion-final-Aidablaya/">Link</a> </p>
              </li>
              
              <li className={`boxmywork__list--li ${currentSlide !== 1 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectoJS} alt="" />
                <p>Javascript, localstorage y obtención de datos de una API <a href="http://beta.adalab.es/modulo-2-evaluacion-final-Aidablaya-1/">Link</a></p>
              </li>

              <li className={`boxmywork__list--li ${currentSlide !== 2 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectoReact} alt="" />
                <p>React (filtros, componenetes y aplicaciónd de rutas), peticiones a una API <a href="http://beta.adalab.es/modulo-3-evaluacion-final-Aidablaya/">Link</a></p>
              </li>
            </ul>
            <div className='boxmywork__nav'>
              <button className='boxmywork__nav--prev' onClick={handlePrev} disabled={currentSlide === 0}>Anterior</button>
              <button className='boxmywork__nav--next' onClick={handleNext} disabled={currentSlide === 2}>Siguiente</button>
            </div>
          </div>
        </section>

         <section className='motherBox__equipwork'>
          <div className='equipwork'>
            <h2 className='equipwork__title'>Trabajos en equipo 🤘</h2>
            <ul className='equipwork__list'>
              <li className={`equipwork__list--li ${currentSlideEquipWork !== 0 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectoE1} alt="" />
                <p>Maquetación: CSS <a href="http://beta.adalab.es/project-promo-t-module-1-team-1//">Link</a> </p>
              </li>

              <li className={`equipwork__list--li ${currentSlideEquipWork !== 1 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectoE3} alt="" />
                <p>Proyecto React <a href="https://programadoras-junior.onrender.com/">Link</a> </p>
              </li>

              <li className={`equipwork__list--li ${currentSlideEquipWork !== 2 ? 'hide-project' : ''}`}>
                <img className='img__boxmywork' src={proyectBob} alt="" />
                <p>Proyecto JavaScript <a href="http://beta.adalab.es/project-promo-t-module-2-team-1/">Link</a> </p>
              </li>

            </ul>
            <div className='boxmywork__nav'>
            <button className='boxmywork__nav--prev' onClick={handlePrevEquipWork} disabled={currentSlideEquipWork === 0}>Anterior</button>
              <button className='boxmywork__nav--next' onClick={handleNextEquipWork} disabled={currentSlideEquipWork === 2}>Siguiente</button>
            </div>
          </div>
        </section>
      </main>
      <footer className='boxFooter'>
            <Link className='boxFooter__link' to="/">
              <li className='boxFooter__link--li'> <img  src={iconRow} alt="" />🌩️</li>
            </Link>
            <div className='boxFooter__footer'>
              <p>:)</p>
            </div>
      </footer>
    </div>
  );
}

export default Works;
