import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './napalm_death/Header';
import NavigationBar from './napalm_death/NavigationBar';
import Band from './napalm_death/Band';
import Vocals from './napalm_death/Vocals';
import Guitar from './napalm_death/Guitar';
import Bass from './napalm_death/Bass';
import Drums from './napalm_death/Drums';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <NavigationBar />
        <Routes>
            <Route path='/band' element={<Band />} />
            <Route path='/vocals' element={<Vocals />} />
            <Route path='/guitar' element={<Guitar />} />
            <Route path='/bass' element={<Bass />} />
            <Route path='/drums' element={<Drums />} />
            <Route path='*' element={<Band />} />
          </Routes>
    </div>
  );
}

export default App;