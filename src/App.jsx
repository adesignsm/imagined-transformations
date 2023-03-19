import React from "react";
import { Routes, Route } from "react-router-dom";
import "./root.css";

import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { NextPageButton } from "./Components/NextPageButton";
import { Background } from "./Components/Background";

import { Home } from "./Routes/Home";
import { About } from "./Routes/About";
import { Contact } from "./Routes/Contact";
import { Services } from "./Routes/Services";
import { Testimonials } from "./Routes/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />

      {/*ROUTES*/}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Background />
    </div>
  );
};

export default App;
