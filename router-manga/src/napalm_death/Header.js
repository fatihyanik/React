import React from 'react';
import bandLogo from './img/Napalm_Death_Logo.jpg';

const Header = () =>{
    return (
      <div>
        <div>
          <img className='header_image' src={bandLogo} alt="John Cooke"/>
        </div>
      </div>
    );
  }

export default Header;