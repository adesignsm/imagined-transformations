import React, { useEffect, useState } from "react";

import sanityClient from "../../client";
import ImageUrlBuilder from "@sanity/image-url";

import "./About.css";

import { useNav } from "../../Hooks/useNav";
import ImageSlider from "../../Components/ImageSlider";

export const About = () => {
  const [paragraphs, setParagraphs] = useState({});
  const [aboutImage, setAboutImage] = useState('');
  const aboutRef = useNav("about");

  const builder = ImageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  }

  const fetchData = async () => {
    try {
      const query = `*[_type == 'about-copy'][0]{
        about_paragraphs,
        slider_images
      }`;
      const result = await sanityClient.fetch(query);
      setAboutImage(result.slider_images[0].slider_image.asset._ref);
      setParagraphs(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={aboutRef} className="about section" id="about">
      <div className="about__container container">
        <div className="about_content__container">
          <div className="about_title__container">
            <h2 className="about__header">
              Achieve Significant Change
            </h2>
            <h3 className="sub__header">
              {Object.keys(paragraphs).length > 0 && paragraphs.about_paragraphs.map((paragraph) => {
                if (paragraph.title === "Heading") {
                  return (
                    paragraph.content
                  )
                }
              })}
            </h3>
          </div>
          <div className="about__content flex">
            <p>
              {Object.keys(paragraphs).length > 0 && paragraphs.about_paragraphs.map((paragraph) => {
                if (paragraph.title === "Introduction") {
                  return (
                    paragraph.content
                  )
                }
              })}
            </p>
            <p>
              {Object.keys(paragraphs).length > 0 && paragraphs.about_paragraphs.map((paragraph) => {
                if (paragraph.title === "Body 1") {
                  return (
                    paragraph.content
                  )
                }
              })}
            </p>
            <p>
              {Object.keys(paragraphs).length > 0 && paragraphs.about_paragraphs.map((paragraph) => {
                if (paragraph.title === "Body 2") {
                  return (
                    paragraph.content
                  )
                }
              })}
            </p>
            <p>
              {Object.keys(paragraphs).length > 0 && paragraphs.about_paragraphs.map((paragraph) => {
                if (paragraph.title === "Conclusion") {
                  return (
                    paragraph.content
                  )
                }
              })}
            </p>
          </div>
        </div>
        <div className="image__container">
          {aboutImage && (
            <img className='image' src={urlFor(aboutImage).url()} />
          )}
          {/* <ImageSlider /> */}
        </div>
      </div>
    </section>
  );
};
