import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./root.css";

import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Background } from "./Components/Background";
import Entry from "./Components/Entry";

import { Home } from "./Routes/Home";
import { About } from "./Routes/About";
import { Contact } from "./Routes/Contact";
import { Services } from "./Routes/Services";
import { Testimonials } from "./Routes/Testimonials";
import { NavProvider } from "./Context/NavContext";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      $("#entry").fadeOut(1000);
    }, 6000);
  }, []);

  return (
    <div className="App">
      <Entry />
      <NavProvider>
        <Header />
        <Navigation />

        <main className="main">
          <Home />
          <About />
          <Testimonials />
          <Services />
          <Contact />
        </main>

        <Background />
      </NavProvider>
    </div>
  );
};

export default App;
