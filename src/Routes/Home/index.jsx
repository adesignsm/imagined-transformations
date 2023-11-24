import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from "@sanity/image-url";
import "./Home.css";

import { useNav } from "../../Hooks/useNav";

export const Home = () => {
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState('');
  const homeRef = useNav("home");

  const builder = ImageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  }

  const fetchData = async () => {
    try {
      const query = `*[_type == 'home-page'][0]{
        home_paragraph,
        home_image,
      }`;
      const result = await sanityClient.fetch(query);
      setParagraph(result.home_paragraph);
      setImage(result.home_image.asset._ref);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={homeRef} className="home section" id="home">
      <div className="home__container container">
        <div className="home__column-one">
          <div className="home_title__container">
            <h2 className="home__header grid">
              <span id="home-title-first">Imagined Transformations</span>
              <span id="home-title-second">Find calm, confidence, & clarity with Catherin Davies</span>
            </h2>
          </div>
          <div className="home__content flex">
            <p className="home__quote">{paragraph}</p>
          </div>
        </div>
        <div className="home__column-two">
          <div className="home__image">
            {image ? <img src={urlFor(image).url()} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};
