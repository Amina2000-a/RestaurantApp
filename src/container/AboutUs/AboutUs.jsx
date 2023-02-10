import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Haqqımızda</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">İnsan yaxşı yemək yeməyibsə, yaxşı düşünə, yaxşı sevə, yaxşı yata bilməz.</p>
        <button type="button" className="custom__button">Daha çox öyrən...</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Tariximiz</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Tarix yüksək həssaslıqdır və tibb aləmində aradan qaldırılmalı olan bir xəstəlik, sənət aləmində isə müstəsna parlaq çiçək kimi görünür.</p>
        <button type="button" className="custom__button">Daha çox öyrən...</button>
      </div>
    </div>
  </div>
);

export default AboutUs;