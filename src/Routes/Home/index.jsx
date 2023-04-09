import React from "react";
import "./Home.css";

import { useNav } from "../../Hooks/useNav";

export const Home = () => {
  const homeRef = useNav("home");

  return (
    <section ref={homeRef} className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_title__container">
          <h2 className="home__header grid">
            <span id="home-title-first">Imagine</span>
            <span id="home-title-second">calm, confidence, & clarity</span>
            <span id="home-title-third">Transformations</span>
          </h2>
        </div>
        <p className="home__name">Catherine Davies</p>
        <div className="home__content flex">
          <p className="home__quote">
            Imagined Transformations is here to help you, step by step, to
            achieve the best version of yourself.
          </p>
          <p className="home__quote">
            Find your new empowered self and eliminate the negative thoughts and
            feelings that hold you back.
          </p>
          <p className="home__quote">
            With my help you achieve more than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};
