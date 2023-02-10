import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Ana səhifə</a></li>
        <li className="p__opensans"><a href="#about">Haqqımızda</a></li>
        <li className="p__opensans"><a href="#menu">Menyu</a></li>
        <li className="p__opensans"><a href="#awards">Mükafatlar</a></li>
        <li className="p__opensans"><a href="#contact">Əlaqə</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registrasiya</a>
        <div />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Ana səhifə</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Haqqımızda</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menyu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Mükafatlar</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Əlaqə</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
