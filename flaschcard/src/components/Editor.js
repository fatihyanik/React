import { NavLink } from "react-router-dom";
import Table from "./Table";
import { useState } from "react";

export default function Editor(props) {
  const [inputFront, setInputFront] = useState("");
  const [inputBack, setInputBack] = useState("");

  const fillCard = () => {
    if (!inputFront || !inputBack) return; // NO EMPTY CARDS!!!
    props.setCard([...props.cards, { front: inputFront, back: inputBack }]);
    setInputFront("");
    setInputBack("");
  };

  /* ------------------------------- RETURN */
  return (
    <div className="container">
      <h3>Edit your card stack here</h3>
      <div>
        <input
          type="text"
          value={inputFront}
          onChange={(e) => setInputFront(e.target.value)}
          placeholder="Front"
        />
        <input
          type="text"
          value={inputBack}
          onChange={(e) => setInputBack(e.target.value)}
          placeholder="Back"
        />
        <button onClick={() => fillCard()}>Add</button>
      </div>
      <br />
      <Table
        cards={props.cards}
        setCard={props.setCard}
        inputFront={inputFront}
        setInputFront={setInputFront}
        inputBack={inputBack}
        setInputBack={setInputBack}
      />
      <hr />
      <nav>
        <NavLink to="/viewer">
          <button>Go to Viewer</button>
        </NavLink>
      </nav>
    </div>
  );
}