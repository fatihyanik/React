import React from "react";

function Controls({ state, dispatch }) {
  function isStarted() {
    if (state.engine === false) {
      const start = Math.floor(Math.random() * 2);

      start === 1 ? (state.engine = true) : (state.engine = false);

      dispatch({
        type: "start",
        payload: { engine: state.engine, currentGear: state.currentGear },
      });
    } else {
      dispatch({ type: "start", payload: { engine: false, currentGear: 0 } });
    }
  }

  function gearUp() {
    if (state.currentGear < 5) {
      state.currentGear++;
    }

    console.log(state.currentGear);
    dispatch({ type: "gearUp", payload: { currentGear: state.currentGear } });
  }

  function gearDown() {
    if (state.currentGear > -2) {
      state.currentGear--;
    }
    dispatch({ type: "gearDown", payload: { currentGear: state.currentGear } });
  }

  return (
    <div>
      <button onClick={isStarted}>{state.engine ? "Stop" : "Start"}</button>
      <button
        onClick={gearUp}
        disabled={!state.engine || state.currentGear === 5}
      >
        Gear up
      </button>
      <button
        onClick={gearDown}
        disabled={!state.engine || state.currentGear === -2}
      >
        Gear down
      </button>
    </div>
  );
}

export default Controls;
