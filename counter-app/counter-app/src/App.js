import React, { useState, useEffect } from "react";


function App(props) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("-Enter Name-");
  const [input, setInput] = useState("");

  // this.state = { counter: 0, name: this.props.name, input: "" };
  // this.updateInput = this.updateInput.bind(this);

  useEffect(() => {
    // 1. check if localStorage contains count
    // 2. if it does, set count to what is in localStorage
    const counterStore = localStorage.getItem("counter");
    const nameAccount = localStorage.getItem("nameAccount");
    if (counterStore !== null) {
      // set the state's count to the count of localStorage
      setCounter(parseInt(counterStore));
      setName(nameAccount);
    }
  }, []);

  // 3. before unload, store count in localStorage
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("counter", counter);
    localStorage.setItem("nameAccount", name);
  });

  return (
    <div
      style={{
        margin: "0.5rem",
        padding: "1rem",
        backgroundColor: props.color,
        borderRadius: "1rem",
        boxShadow: "0.5rem 0.7rem 0.9rem rgba(0,0,0, 0.4)",
      }}
    >
      <h2 style ={{display:"flex", justifyContent:"center"}}>
        Counter for {name} is at {counter}
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button
          style={{ marginRight: "1rem", marginLeft: "1rem" }}
          onClick={() => setName(input)}
        >
          Enter Name
        </button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.8rem",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Jack Daniels"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
}

export default App;