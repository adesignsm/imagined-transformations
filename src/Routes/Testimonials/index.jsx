import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

import "./Testimonials.css";
import { useNav } from "../../Hooks/useNav";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState({});
  const testimonialRef = useNav("testimonials");

  const fetchData = async () => {
    try {
      const query = `*[_type == 'testimonial-accounts'][0]{
        testimonial_accounts
      }`;
      const result = await sanityClient.fetch(query);
      setTestimonials(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={testimonialRef} className="testimonials section" id="testimonials">
      <div className="testimonials__section container grid">
        <div className="test_title__container">
          <h2 className="testimonial__header flex">
            <span id="test-title-one">What People are Saying</span>
            <span id="test-title-two">- Testimonials -</span>
          </h2>
        </div>
        <div className="testimonials__container flex">
          {Object.keys(testimonials).length > 0 && testimonials.testimonial_accounts.slice(0, 3).map((account) => {
            return (
              <div className="testimonial">
                <div className="testimonial__content">
                  <h3 className="clients"> {account.title} </h3>
                  <p className="testimonial__services">{account.subject}</p>
                  <p className="content">
                    "{account.content}"
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
