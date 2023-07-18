import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import "./Home.css";

import { useNav } from "../../Hooks/useNav";

export const Home = () => {
  const [paragraphs, setParagraphs] = useState({});
  const homeRef = useNav("home");

  const fetchData = async () => {
    try {
      const query = `*[_type == 'home-intro-copy'][0]{
        paragraph_1,
        paragraph_2,
        paragraph_3
      }`;
      const result = await sanityClient.fetch(query);
      setParagraphs(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={homeRef} className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_title__container">
          <h2 className="home__header grid">
            <span id="home-title-first">Imagined</span>
            <span id="home-title-second">calm, confidence, & clarity</span>
            <span id="home-title-third">Transformations</span>
          </h2>
        </div>
        <p className="home__name">Catherine Davies</p>
        <div className="home__content flex">
          <p className="home__quote">{paragraphs.paragraph_1}</p>
          <p className="home__quote">{paragraphs.paragraph_2}</p>
          <p className="home__quote">{paragraphs.paragraph_3}</p>
        </div>
      </div>
    </section>
  );
};
