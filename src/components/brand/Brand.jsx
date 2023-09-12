import React from 'react';
import { gmail, phone, whatsapp, } from './imports';
import './brand.css';

const brand = () => (
  <div className="xconsulting_brand section_padding" id="brands" >
    <div>
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=xconsultinguxui@gmail.com">
      <img src={gmail} alt="Gmail" />
      </a>
    </div>
    <div>
    <a href="tel:3326013476" target="_blank">
      <img src={phone} alt="Phone" />
      </a>
    </div>
    <div>
    <a href="https://wa.me/3326013476" target="_blank">
      <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
    </div>
);

export default brand;
