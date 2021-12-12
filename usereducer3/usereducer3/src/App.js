import { useReducer } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Viewer from "./components/Viewer";

function reducer(state, action) {
  if (action.type === "start") {
    return {
      ...state,
      engine: action.payload.engine,
      currentGear: action.payload.currentGear,
    };
  }

  if (action.type === "gearUp") {
    return { ...state, currentGear: action.payload.currentGear };
  }

  if (action.type === "gearDown") {
    return { ...state, currentGear: action.payload.currentGear };
  }

  if (action.type === "acce") {
    return { ...state, speed: action.payload.speed };
  }
}

const initialState = {
  engine: false,
  speed: 0,
  currentGear: 0,
  distance: 0,
  accelerate: 50,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <Viewer state={state} />
      <Controls state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
