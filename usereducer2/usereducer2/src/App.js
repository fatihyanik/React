import React, { useReducer } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Table from "./components/Table";
import Viewer from "./components/Viewer";

function reducer(state, action) {
  if (action.type === "add") {
    return [...state, action.payload.card];
  }

  if (action.type === "toogle") {
    state[action.payload.index].isFront = action.payload.isFront;

    return [...state];
  }

  if (action.type === "delete") {
    const newArray = [...state];

    newArray.splice(action.payload.index, 1);

    return newArray;
  }
}

const initialState = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <Table state={state} dispatch={dispatch} />
      <Controls dispatch={dispatch} />
      <hr />
      <Viewer state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
