import React from "react";
import "./Testimonials.css";
import { useNav } from "../../Hooks/useNav";

export const Testimonials = () => {
  const testimonialRef = useNav("testimonials");

  return (
    <section
      ref={testimonialRef}
      className="testimonials section"
      id="testimonials"
    >
      <div className="testimonials__section container grid">
        <div className="test_title__container">
          <h2 className="testimonial__header flex">
            <span id="test-title-one">What People are Saying</span>
            <span id="test-title-two">Testimonials</span>
          </h2>
        </div>
        <div className="testimonials__container flex">
          <div className="testimonial">
            <div className="testimonial__content">
              <h3 className="clients">Rupelyn O - Young Professional</h3>
              <p className="testimonial__services ">Eliminating Phobias</p>
              <p className="content">
                "As someone who has suffered from a lifelong irrational fear, I
                began to lose hope and believed that this fear would be part of
                me forever. Even after years of therapy, nothing helped me
                overcome my fears. After one single session with...
              </p>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial__content">
              <h3 className="clients">Caroline F - Nurse</h3>
              <p className="testimonial__services ">Recovering</p>
              <p className="content">
                "As someone who has suffered from a lifelong irrational fear, I
                began to lose hope and believed that this fear would be part of
                me forever. Even after years of therapy, nothing helped me
                overcome my fears. After one single session with...
              </p>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial__content">
              <h3 className="clients">Paul C - Consultant</h3>
              <p className="testimonial__services ">Achieving Purpose</p>
              <p className="content">
                "I highly recommend Catherine Davies as your personal coach. She
                helped me to get unstuck and out of my own way so that I could
                clear a path to reaching my goals. Catherine built great rapport
                and was compassionate, attentive and thorough in her guidance to
                help me rediscover my best self. I appreciate Catherine for her
                kindness...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
