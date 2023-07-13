import React, { useState } from "react";
import "./Contact.css";
import { useNav } from "../../Hooks/useNav";

export const Contact = () => {
  const contactRef = useNav("contact");

  return (
    <section ref={contactRef} className="contact section" id="contact">
      <div className="contact__container container flex">
        {/*TITLE CONTAINER*/}
        <div className="contact__title__container flex">
          <h2 className="contact__title">Contact</h2>
          <p className="title__content">
            Get in touch today to book your 30 minute free consultation. Learn
            more about how I can help you get unstuck.
            <br/>
            <br />
            Heads up! If the contact form does not work for you, please click this button to send Catherine a message.
          </p>
          <button className="secondary-contact__button">
            <a href="mailto:catherinedavies@imaginedtransformations.com">
              Send Catherine a Message
            </a>
          </button>
        </div>

        {/*FORM*/}
        <div className="contact__form">
          <form>
            <div className="contact__content">
              <label className="label__title" htmlFor="name">
                Name:*{" "}
              </label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="email">
                Email:*{" "}
              </label>
              <input type="email" id="email" placeholder="Enter yur email address" required />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="phone">
                Phone:{" "}
              </label>
              <input type="text" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="subject">
                Subject:{" "}
              </label>
              <input type="text" id="subject" placeholder="Type the subject" />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="message">
                Message:{" "}
              </label>
              <textarea name="message" id="message" rows="3" placeholder="Type your message to Catherine here." required></textarea>
            </div>
            {/*Made submit button but not sure where to send afterwards */}
            <button className="form__button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
