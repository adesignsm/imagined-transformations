import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <section className="header">
      {/*Text will display for header from 480px and larger*/}
      <div className="header__container container grid">
        <a className="contact-link" href="#contact">
          <p className="contact__link">Send a message to Catherine</p>
        </a>
      </div>
      {/*Envelope will display from 480px and lower (mobile)*/}
      <div className="mobile__message">
        <a href="#contact">
          <i className="uil uil-envelope"></i>
        </a>
      </div>
    </section>
  );
};
