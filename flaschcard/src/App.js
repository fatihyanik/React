import "./App.css";
import Viewer from "./components/Viewer";
import Editor from "./components/Editor";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [cards, setCard] = useState([]);

  /* ------------------------------- RETURN */
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route
            path="viewer"
            element={<Viewer cards={cards} setCard={setCard} />}
          />
          <Route
            path="editor"
            element={<Editor cards={cards} setCard={setCard} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}