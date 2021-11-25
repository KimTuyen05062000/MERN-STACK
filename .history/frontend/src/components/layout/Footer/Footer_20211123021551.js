import React from 'react';
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';

const Footer = () => {
  return(
    <footer id='footer'>
      <div class="leftFooter">
        <h4>DOWNLOAD OUR AP4</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt='playstore'></img>
        <img src={appStore} alt='Appstore'></img>
      </div>
      <div class="midFooter"></div>
      <div class="rightFooter"></div>
    </footer>
  )
}
