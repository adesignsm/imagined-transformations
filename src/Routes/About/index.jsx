import React from "react";
import "./About.css";
import { useNav } from "../../Hooks/useNav";
import ImageSlider from "../../Components/ImageSlider";
import { photos } from "../../Components/ImageSlider/photos";

export const About = () => {
  const aboutRef = useNav("about");

  return (
    <section ref={aboutRef} className="about section" id="about">
      <div className="about__container container">
        <div className="about_content__container">
          <div className="about_title__container">
            <h2 className="about__header">
              Achieve Significant Change
            </h2>
            <h3 className="sub__header">
              Imagine becoming the person you desire to be
            </h3>
          </div>
          <div className="about__content flex">
            <p>
              I will guide and coach you step by step to overcome past
              experiences, fears, or thoughts that overwhelm you and limits your
              future opportunities. Achieving lasting results in only a few
              weeks, not years, with some fears and phobias released in just a
              few hours. Unlike other forms of therapy, my approach will not
              require you to relive the past or even share the details of those
              events
            </p>
            <p>
              The techniques I use are profoundly effective and gentle. I see my
              clients release the pain of their past experiences and negative
              thoughts and watch as a sense of calm washes over them.
              Life-altering changes happen quickly and permanently!
            </p>
            <p>
              I am a certified Master Neuro Linguistic Programming Practitioner,
              with a certification in Time Line Therapy®, as well as a
              practitioner of hypnotherapy. In addition, I am certified as a
              core transformation and wholeness coach.
            </p>
            <p>
              I work with my clients over a span of three months and sessions
              are conducted via video call or in person.
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
