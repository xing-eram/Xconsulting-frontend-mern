import React from 'react';
import possibilityImage from '../../assets/reloj-money.png.webp';
import './possibility.css';

const Possibility = () => (
  <div className="xconsulting_possibility section__padding" id="possibility">
    <div className="xconsulting_possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="xconsulting_possibility-content">
      <h1 className="gradient__text">Preguntas quirúrgicas  <br /> para impulsar y humanizar los datos.</h1>
      <p>Tenemos las personas, las soluciones, las metodologías y los marcos para resolver
para los desafíos más complejos en cualquier etapa, trabajomos con flywheel y bow tie funnels, adaptamos a negocios, madurez y alcance</p>

<h4>Hay consultorías. <br></br> Hay agencias.<br></br>Hay integradores.<br></br> <br></br> Entonces estamos nosotros</h4>

      <h4>SOMOS LO MÁS CERCANO A UNA BALA DE PLATA.</h4>
    </div>
  </div>
);

export default Possibility;