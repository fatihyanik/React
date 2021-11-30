import React from 'react';
import john from './img/john_guitar.jpg';

const Guitar = () =>{
    return (
      <div>
        <h3>John Cooke</h3>
        <div>
          <img className='member_img' src={john} alt="John Cooke"/>
        </div>
      </div>
    );
  }
  export default Guitar;