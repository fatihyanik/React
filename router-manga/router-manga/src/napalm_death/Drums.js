import React from 'react';
import danny from './img/danny_drums.jpg';

const Drums = () =>{
    return (
      <div>
        <h3>Danny Herrera</h3>
        <div>
          <img className='member_img' src={danny}  alt="Danny Herrera"/>
        </div>
      </div>
    );
  }
  export default Drums;