import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { NextPageButton } from "../../Components/NextPageButton";


export const Home = () => {
  return (
    <section transition-style="in:wipe:right" className="home section">
      <div className="home__container container grid">
        <div className="home_title__container">
          <h2 className="home__header grid">
            <span id="home-title-first">Imagine</span>
            <span id="home-title-second">calm, confidence, & clarity</span>
            <span id="home-title-third">Transformations</span>
          </h2>
        </div>
        <p className="home__name">Catherine Davies</p>
        <div className="home__content">
          <p className="home__quote">
            Imagined Transformations is here 
            <br /> to help you, step by step,
            to achieve 
            <br /> the best version of yourself.
          </p>
          <p className="home__quote">
            Find your new empowered self
             <br /> and eliminate the negative
            thoughts and feelings that hold you back.
          </p>
          <p className="home__quote">With my help you achieve more than ever before.</p>
        </div>

      <Link to="/about">
        <NextPageButton />
      </Link>
      </div>

    </section>
  );
};
