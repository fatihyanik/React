import React, { useState } from "react";




function App() {
  const [name, setName] = useState("Chuloo");
  const [age, setAge] = useState("38");

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <h3>Display Name: {name}</h3>
        <h3>Display Age: {age}</h3>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            value={name}
            placeholder="William"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input
            type="number"
            className="input"
            placeholder="38"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
      </div>
     
    </div>
  );
}

export default App;
