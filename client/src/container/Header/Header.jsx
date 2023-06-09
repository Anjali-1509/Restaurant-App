import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>As you indulge in our culinary creations, we invite you to immerse yourself in the ambiance, savoring each bite and reveling in the company of your companions.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3338497.jpg&fm=jpg" alt="header_img" />
    </div>
  </div>
);

export default Header;
