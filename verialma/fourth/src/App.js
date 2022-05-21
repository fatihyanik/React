import "./App.css";
import React, { useState } from "react";

function App() {
  const [shift, setShift] = useState(0);

  const position = () => {
    setShift(shift - 50);
  };

  return (
    <div className="App">
    
      <span><h1 style={{color:"white"}}>Move the Box!</h1></span>

      <div
        style={{ transform: `translateY(${shift}px)`}}
        className="rectangle"
      >
      </div>
      <div className="shift_right">
        <button onClick={position} style={{background:"blue", color:"white", minHeight:"60px", minWidth:"140px"}}>👇 Move up 👇</button>
      </div>
    
    </div>
  );
}

export default App;
