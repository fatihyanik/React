import React from 'react';
import barney from './img/barney_vocals.jpg';

const Vocals = () =>{
    return (
      <div>
        <h3>Mark "Barney" Greenway</h3>
        <div>
          <img className='member_img' src={barney}  alt="Mark 'Barney' Greenway"/>
        </div>
      </div>
    );
  }
  export default Vocals;