import React, { useState } from "react";
import "./Contact.css";
import { useNav } from "../../Hooks/useNav";

export const Contact = () => {
  {
    /* 
  ----Email handler----
    ref: https://w3collective.com/react-contact-form/
*/
  }
  const [status, setStatus] = useState("Submit");

  const contactRef = useNav("contact");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    /*
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);


*/
  };

  return (
    <section ref={contactRef} className="contact section" id="contact">
      <div className="contact__container container flex">
        {/*TITLE CONTAINER*/}
        <div className="contact__title__container">
          <h2 className="contact__title">Contact</h2>
          <p className="title__content">
            Get in touch today to book your 30 minute free consultation. Learn
            more about how I can help you get unstuck.
          </p>
        </div>

        {/*FORM*/}
        <div className="contact__form">
          <form>
            <div className="contact__content">
              <label className="label__title" htmlFor="name">
                Name: *{" "}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="email">
                Email: *{" "}
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter yur email address"
                required
              />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="phone">
                Phone:{" "}
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="subject">
                Subject: *{" "}
              </label>
              <input type="text" id="subject" placeholder="Type the subject" required />
            </div>

            <div className="contact__content">
              <label className="label__title" htmlFor="message">
                Message: *{" "}
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="Type your message to Catherine here."
                required
              ></textarea>
            </div>
            {/*Made submit button but not sure where to send afterwards */}
            <button className="contact__submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
