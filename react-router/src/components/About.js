import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
        <>
          <main>
            <h2>About me</h2>
            <p>Nothing much</p>
          </main>  
          <nav>
              <Link to="/">Home</Link>
          </nav>
        </>
    )
}

export default About