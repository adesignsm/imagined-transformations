import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <section className="services section">
      <div className="services__section container grid">
        <div className="servicetitle__container">
          <h2 className="service__title">How I can help</h2>
        </div>

        <div className="service__container grid">
          <div className="service">
            <h3 className="service__subtitle">Get excited about your future</h3>
            <p className="service__content">
              Anxiety is caused by our minds predicting a negative future, being
              overwhelmed by the emotions and then robbing us of our dreams.
              <br />
              <br />
              Imagine freedom from hurtful emotions, and instead, being
              connected to your resourceful self and excited about your future.
            </p>
          </div>

          <div className="service">
            <h3 className="service__subtitle">
              Finding confidence and contentment
            </h3>
            <p className="service__content">
              Depression is a feeling of being trapped by life's baggage and
              paralyzed by negative emotions. 
              <br />
              <br />
              Imagine discarding that old baggage and replace it with joy and
              contentment.
            </p>
          </div>

          <div className="service">
            <h3 className="service__subtitle">Release trauma & PTSD</h3>
            <p className="service__content">
              Horrible things happen and in one moment life changes. 
              <br />
              <br />
              Imagine re-claiming your life and no longer being triggered and
              limited by the past.
            </p>
          </div>

          <div className="service">
            <h3 className="service__subtitle">
              Achieve your career aspirations{" "}
            </h3>
            <p className="service__content">
              You want to achieve more, but old unproductive habits and thinking
              are getting in the way. 
              <br />
              <br /> 
              Align your desires, channel your abilities and become that
              successful person you wish to be.
            </p>
          </div>

          <div className="service">
            <h3 className="service__subtitle">Achieve wellness</h3>
            <p className="service__content">
              Reclaim your health and happiness by releasing the negative energy
              that is draining your physical resources. 
              <br />
              <br />
              Imagine achieving the health and wellness you seek.{" "}
            </p>
          </div>

          <div className="service">
            <h3 className="service__subtitle">Let go of fear & phobias</h3>
            <p className="service__content">
              Fear and phobias may be illogical, but they sure have an impact on
              our lives. 
              <br />
              <br />
              Re-train your automatic response to triggers, so you are able to
              respond in a calm, logical way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
