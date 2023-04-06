import React, { useEffect } from "react";
import "./root.css";

import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Background } from "./Components/Background";

import { Home } from "./Routes/Home";
import { About } from "./Routes/About";
import { Contact } from "./Routes/Contact";
import { Services } from "./Routes/Services";
import { Testimonials } from "./Routes/Testimonials";
import { NextPageButton } from "./Components/NextPageButton";
import { NavProvider } from "./Context/NavContext";


const App = () => {
  

  return (
    <div className="App">

      <NavProvider>
        <Header />
        <Navigation />

        {/*ROUTES*/}
        <main className="main items" >
            <Home />
            <About />
            <Testimonials />
            <Services />
            <Contact />
        </main>

        <Background />
{   /*     <NextPageButton />
*/}      </NavProvider>

    </div>
  );
};

export default App;
