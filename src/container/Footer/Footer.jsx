import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Əlaqə</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Ən Ləzzətli Yemək Özündə Kiçik Bir Sirr Saxlayır ~ Bir Çimdik Sevgi.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">İş saatları</h1>
        <p className="p__opensans">Bazar ertəsi-Cümə:</p>
        <p className="p__opensans">10:00 - 14:00</p>
        <p className="p__opensans">Şənbə-Bazar:</p>
        <p className="p__opensans">10:00 - 15:00</p>
      </div>
    </div>
  </div>
);

export default Footer;
