import React from 'react';
//import videoGame from '../../images/game.gif'; 
import '../../styles/pages/Works.scss';
//import proyectoCss from '../../images/proyectoCss.gif';
//import proyectoJS from '../../images/proyectoJS.gif';

function Works() {
  const handleClickLinkGame = () => {
    window.location.href = 'https://aidablaya.github.io/trabajo-final-individual-game/';
  }
  return (
    <div>
      <main className='motherBox'>
        <section className='motherBox__principal'>
          <div className='boxprincipal'>
            <h2 className='boxprincipal__title'>Trabajo en curso</h2>
            <img className='img' src='' alt="" />
            <p>Rainbow Pot: Juego en proceso <span className="rotating-icon">⏳</span></p>
            <button onClick={handleClickLinkGame}>Te dejo el link 👀</button>
          </div>
        </section>

        <section className='motherBox__mywork'>
          <h2>Trabajos anteriores 📚</h2>
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
      {/* Aquí puedes agregar el contenido de la página */}
    </div>
  );
}

export default Works;