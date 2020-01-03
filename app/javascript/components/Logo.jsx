import React, { useState } from 'react';
import LogoImage from 'images/madwork-logo-white.png';
import { useSpring, animated as a } from 'react-spring';

const Logo = () => {

  const resize = useSpring({
    from: { width: '500px'},
    to: { width: '100px' , transform: 'translate(-600px, -320px)'}
  });

  return(
    <a.div className="logo-container" style={resize}>
      <img id="logo" src={LogoImage}/>
    </a.div>
  )
}

export default Logo;
