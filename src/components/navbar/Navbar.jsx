import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Imagen 1.png';
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className= "xconsulting_navbar">
      <div className= "xconsulting_navbar_links">
        <div className='xconsulting_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="xconsulting_navbar-links_container">
        <p><a href="#home">Xvision</a></p>
          <p><a href="#whatXconsulting">Xsoluciones</a></p>
          <p><a href="#possibility">Xinsights</a></p>
          <p><a href="#features">Xwork</a></p>
        </div>
      </div>
      <div className="xconsulting_navbar-sign">
        <p>Newsletter</p>
        <button type="button">Join</button>
      </div>
      <div className="xconsulting_navbar-menu">
        </div>
      <div className="xconsulting_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
        <div className="xconsulting_navbar-menu_container scale-up-center">
          <div className="xconsulting_navbar-menu_container-links">
          <p><a href="#home">Xvision</a></p>
            <p><a href="#whatXconsulting">Xsoluciones</a></p>
            <p><a href="#possibility">Xinsights</a></p>
            <p><a href="#features">Xwork</a></p>

            <div className="xconsulting_navbar-menu_container-links-sign">
        <p>Newsletter</p>
        <button type="button">Join</button>
      </div>
          </div>
          </div>
  )}
      </div>
    </div>

  )
}

export default Navbar 
