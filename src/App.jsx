import React from "react";
import "./root.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About"

const App = () => {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="about" element={ <About /> } />
                </Routes>
        </div>
    )
}

export default App;