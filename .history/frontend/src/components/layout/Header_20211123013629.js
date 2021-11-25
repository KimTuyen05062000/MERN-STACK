import React from 'react';
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../images/logo.png';

const Header = () => {
  return <ReactNavbar 
  burgerColor="#eb4034" 
  burgerColorHover="#a62d24" 
  logo={logo}
  
  />;
};

export default Header;