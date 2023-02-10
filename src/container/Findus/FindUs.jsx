import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Əlaqə</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>İş saatları</p>
        <p className="p__opensans">B.e - C: 10:00 - 14:00</p>
        <p className="p__opensans">Ş - B: 10:00 - 15:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Bizi ziyarət edin</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
