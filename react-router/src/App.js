import React from 'react'
import Home from './components/Home.js'
import About from './components/About.js'
import { Routes, Route } from 'react-router-dom'
import './index.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router</h1>
            {/*<Link to="about">About</Link>
            <Link to="contact">Contact</Link>*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App