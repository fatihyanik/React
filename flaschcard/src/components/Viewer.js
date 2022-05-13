import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Viewer(props) {
  const [flipper, setFlipper] = useState(true);
  const [ind, setInd] = useState(0);

  /* ------------------------------- TURN THE CARD */
  const clickFlip = () => {
    flipper ? setFlipper(false) : setFlipper(true);
  };

  /* ------------------------------- GO THROUGH CARD STACK AND FLIP TO FRONT*/
  const next = () => {
    ind === props.cards.length - 1 ? setInd(0) : setInd(ind + 1);
    setFlipper(true);
  };

  const prev = () => {
    ind === 0 ? setInd(props.cards.length - 1) : setInd(ind - 1);
    setFlipper(true);
  };

  /* ------------------------------- RETURN */
  return (
    <div className="container">
      <div>
        <h3>Give the card a click for a flip</h3>
      </div>
      <div className="card" onClick={clickFlip}>
        {!props.cards.length
          ? "Go to Editor and create a stack"
          : flipper
          ? props.cards[ind].front
          : props.cards[ind].back}
      </div>
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <hr />
      <nav>
        <NavLink to="/editor">
          <button>Go to Editor</button>
        </NavLink>
      </nav>
    </div>
  );
}