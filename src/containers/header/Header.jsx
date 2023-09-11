import React from 'react';
import updown from '../../assets/up-and-down.png.webp';
import SCurve from '../../assets/SCurve.png..webp';
import './header.css';

const Header = () => (
  <div className="xconsulting_header section_padding" id="home">
    <div className="xconsulting_header-content">
      <h1 className="gradient__text">Amplifique su experiencia de marca.</h1>
      <p>Operaciones Inteligentes, análisis de datos perspicaces, un enfoque centrado en la experiencia de usuario y las personas, un marco para el crecimiento empresarial, mapeo de empatía e incluso una vista 360° del cliente.</p>
      <div className="xconsulting_header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="xconsulting_header-content_people">
        <img src={updown} />
        <p>58 people joined to newsletter in the last day!</p>
      </div>
    </div>

    <div className="xconsulting_header-image">
      <img src={SCurve} />
    </div>
  </div>
);

export default Header;
