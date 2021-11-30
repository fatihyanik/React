
import React from 'react';
import band from './img/nd_band.jpg';

const Band = () =>{
    return (
      <div>
        <h3>Napalm Death</h3>
        <div>
          <img className='member_img' src={band} alt="Napalm Death" />
        </div>
      </div>
    );
  }
  export default Band;