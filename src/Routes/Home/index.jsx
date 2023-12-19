import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from "@sanity/image-url";
import "./Home.css";

import { useNav } from "../../Hooks/useNav";

export const Home = () => {
  const [paragraph, setParagraph] = useState('');
  const [wordBlurb, setWordBlurb] = useState('');
  const [image, setImage] = useState({
    image1: '',
    image2: '',
  });
  const homeRef = useNav("home");

  const builder = ImageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  }

  const fetchData = async () => {
    try {
      const query = `*[_type == 'home-page'][0]{
        home_paragraph,
        home_image_one,
        home_image_two,
        home_word_blurb
      }`;
      const result = await sanityClient.fetch(query);
      setParagraph(result.home_paragraph);
      setImage({
        ...image,
        image1: result.home_image_one.asset._ref,
        image2: result.home_image_two.asset._ref,
      });
      setWordBlurb(result.home_word_blurb);
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
            {image.image1 && image.image2 && (
              <div className="home__image-container">
                <img src={urlFor(image.image1).url()} />
                <img src={urlFor(image.image2).url()} />
              </div>
            )}
          <p className="home__quote word_blurb">{wordBlurb}</p>
        </div>
      </div>
    </section>
  );
};
