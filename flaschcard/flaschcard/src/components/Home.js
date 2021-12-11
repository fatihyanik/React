import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  /* ------------------------------- RETURN */
  return (
    <div>
      <div className="container">
        <h1>Flash Card</h1>
      </div>
      <nav>
        <NavLink to="/editor">
          <button>Go and edit your card stack</button>
        </NavLink>
        <NavLink to="/viewer">
          <button>Go and look through your cards</button>
        </NavLink>
      </nav>
    </div>
  );
}