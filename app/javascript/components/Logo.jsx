import React, { useState } from 'react';
import LogoImage from 'images/madwork-logo-black.png';
import { useSpring, animated as a } from 'react-spring';

const Logo = () => {


  return(
    <div className="logo-container">
      <img id="logo" src={LogoImage}/>
    </div>
  )
}

export default Logo;
