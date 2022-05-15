
import React from 'react';
import band from './img/nd_band.jpg';

const Band = () =>{
    return (
      <div>
        <h3>Manga</h3>
        <div>
          <img className='member_img' src={band} alt="Manga" />
        </div>
      </div>
    );
  }
  export default Band;