import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

import "./Contact.css";
import { useNav } from "../../Hooks/useNav";

export const Contact = () => {
  const [contactData, setContactData] = useState({});
  const contactRef = useNav("contact");

  const fetchData = async () => {
    try {
      const query = `*[_type == 'contact-copy'][0]{
        paragraph_1,
        paragraph_2,
        email_contact,
        secondary_email_contact
      }`;
      const result = await sanityClient.fetch(query);
      setContactData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={contactRef} className="contact section" id="contact">
      <div className="contact__container container flex">
        {/*TITLE CONTAINER*/}
        <div className="contact__title__container flex">
          <h2 className="contact__title">Contact</h2>
          <p className="title__content">
            {Object.keys(contactData).length > 0 && contactData.paragraph_1}
            <br/>
            <br />
            {Object.keys(contactData).length > 0 && contactData.paragraph_2}
          </p>
          <button className="secondary-contact__button">
            <a href={Object.keys(contactData).length > 0 ? `mailto:${contactData.email_contact}` : `mailto:${contactData.secondary_email_contact}`}>
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
