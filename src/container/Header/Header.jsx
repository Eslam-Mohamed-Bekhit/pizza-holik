import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__overlay app__header-pg">
  <div className="app__header app__wrapper section__padding app__header-pg_overlay" id="home">
    
    <div className="app__wrapper_info">
      <SubHeading title="More than you thought" />
      <h1 className="app__header-h1">The Best Pizza in the world </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Order Now</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
    </div>
  </div>
);

export default Header;
