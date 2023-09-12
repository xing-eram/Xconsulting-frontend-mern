import React from 'react';
import xconsultingLogo from '../../assets/logo_transparent.png';
import './footer.css';

const Footer = () => (
  <div className="xconsulting_footer section__padding">
    <div className="xconsulting_footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="xconsulting_footer-btn">
      <p>Join our Newsletter!</p>
    </div>

    <div className="xconsulting_footer-links">
      <div className="xconsulting_footer-links_logo">
        <img src={xconsultingLogo} alt="xconsulting_logo" />
        <p>Tlajumulco , Jalisco 45643, <br /> All Rights Reserved</p>
      </div>
      <div className="xconsulting_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p><a href="#brands">Contact</a></p>
      </div>
      <div className="xconsulting_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p><a href="#brands">Contact</a></p>
      </div>
      <div className="xconsulting_footer-links_div">
        <h4>Get in touch</h4>
        <p>Tlajumulco , Jalisco 45643</p>
        <p>33 2601 3476</p>
        <p>xconsultinguxui@gmail.com</p>
      </div>
    </div>

    <div className="xconsulting_footer-copyright">
      <p>@2023 Xconsulting. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;