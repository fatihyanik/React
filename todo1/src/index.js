import { StrictMode } from "react";
import ReactDOM from "react-dom";
import List from "./components/List.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <List />
  </StrictMode>,
  rootElement
);
