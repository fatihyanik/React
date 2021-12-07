import './App.css';
import {useReducer} from "react";

function reducer(state, action){
  switch (action.type) {
    case "green":
      return {...state, backgroundColor:"green", color: "yellow", fontSize:"40px", styleName:"green style"}
    case "blue":
      return {...state, backgroundColor:"blue", color:"white", fontSize:"30px", styleName:"blue style"}
    case "red":
      return {...state, backgroundColor:"red", color:"black", fontSize:"25px", styleName:"red style"}
    default:
      return state;
  }
}

const initialState = {
  backgroundColor :"white",
  color:'black',
  fontSize:'16px',
  styleName:'Ohne Style'
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App" style={{minHeight:"100vh", backgroundColor:`${state.backgroundColor}`}}>
      <button onClick={()=>dispatch({type:"green"})}>Green style</button>
      <button onClick={()=>dispatch({type:"blue"})}>Blue style</button>
      <button onClick={()=>dispatch({type:"red"})}>Red style</button>
      <h1 style={{fontSize:`${state.fontSize}`, color:`${state.color}`}}>My style is {state.styleName}</h1>
      <span style={{color:`${state.color}`}}>{state.fontSize}</span>
    </div>
  );
}

export default App;
