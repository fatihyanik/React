import React from "react";

function Viewer({ state }) {
  return (
    <div>
      <h2>Engine :{state.engine ? " ON" : " OFF"}</h2>
      <h2>Speed :{state.currentGear * 50}</h2>
      <h2>Current gear :{state.currentGear}</h2>
    </div>
  );
}

export default Viewer;
