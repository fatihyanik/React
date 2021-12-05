
import React, { useState } from "react";
import { HashRouter, Routes, Route, NavLink} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Users from "./Users";
import "./style.css";
import User from "./User";
import Footer from "./Footer";

function App() {
  const [state,setState]=useState("String")

  return (
    <HashRouter>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" >Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/users" >Users </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
               <Route path="/users/:name" element={<User/>}/>
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route  path="*" element={<h1>Page not Found</h1>} /> 
        </Routes>


       <Footer/>
      </div>

     
    </HashRouter>
  );
}

export default App;