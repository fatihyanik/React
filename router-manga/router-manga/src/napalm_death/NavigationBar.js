import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/vocals">Vocals</Link>
    </li>
    <li>
      <Link to="/guitar">Guitar</Link>
    </li>
    <li>
      <Link to="/bass">Bass</Link>
    </li>
    <li>
      <Link to="/drums">Drums</Link>
    </li>
  </div>
  );
}
export default NavigationBar;