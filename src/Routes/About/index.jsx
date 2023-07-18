import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import "./About.css";
import { useNav } from "../../Hooks/useNav";
import ImageSlider from "../../Components/ImageSlider";
import { photos } from "../../Components/ImageSlider/photos";

export const About = () => {
  const [paragraphs, setParagraphs] = useState({});
  const aboutRef = useNav("about");

  const fetchData = async () => {
    try {
      const query = `*[_type == 'about-copy'][0]{
        about_paragraphs
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
          <ImageSlider slides={photos} />
        </div>
      </div>
    </section>
  );
};
