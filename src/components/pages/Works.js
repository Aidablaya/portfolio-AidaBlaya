import React, { useState } from 'react';
import videoGame from '../../images/gamegif.gif'; 
import '../../styles/pages/Works.scss';
import proyectoCss from '../../images/proyectoCssGif.gif';
import proyectoJS from '../../images/proyectoJSGif.gif';

function Works() {

  //const [sliderPosition, setSliderPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    const totalSlides = 2; // Cantidad total de slides
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Calcula el índice del slide anterior
  const handlePrev = () => {
    const totalSlides = 2; // Cantidad total de slides
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  
  const handleClickLinkGame = () => {
    window.location.href = 'https://aidablaya.github.io/trabajo-final-individual-game/';
  }
  return (
    <div>
      <main className='motherBox'>
        <section className='motherBox__principal'>
          <div className='boxprincipal'>
            <h2 className='boxprincipal__title'>Trabajo en curso <span className="rotating-icon">⏳</span></h2>
            <img className='img' src={videoGame} alt="" />
            <p>Rainbow Pot: Juego en proceso </p>
            <button onClick={handleClickLinkGame} className='boxprincipal__button'>Te dejo el link 👀</button>
          </div>
        </section>

        <section className='motherBox__mywork'>
          <div className='boxmywork'>
            <h2>Trabajos anteriores 📚</h2>
            <ul className='boxmywork__list' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <li className='boxmywork__list--li'>
                <img className='img' src={proyectoCss} alt="" />
                <p>Maquetación: CSS <a href="http://beta.adalab.es/modulo-1-evaluacion-final-Aidablaya/">Link</a> </p>
              </li>
              <li className='boxmywork__list--li'>
                <img className='img' src={proyectoJS} alt="" />
                <p>Javascript, localstorage y obtención de datos de una API <a href="http://beta.adalab.es/modulo-2-evaluacion-final-Aidablaya-1/">Link</a></p>
              </li>
            </ul>
            <div className='boxmywork__nav'>
                <button className='boxmywork__nav--prev' onClick={handlePrev}>Anterior</button>
                <button className='boxmywork__nav--next' onClick={handleNext}>Siguiente</button>
              </div>
          </div>
        </section>

        <section className='motherBox__equipwork'>
          <h2>Trabajos en equipo 🤘</h2>
          <ul>
            <li>
              <img className='img' src='' alt="" />
              <p>Maquetación: CSS</p>
            </li>
            <li>
              <img className='img' src='' alt="" />
              <p>Maquetación: CSS</p>
            </li>
          </ul>
        </section>
      </main>
      
      </div>
  );
}

export default Works;