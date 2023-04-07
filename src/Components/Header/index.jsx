import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <section className="header">
      {/*Text will display for header from 480px and larger*/}
      <div className="header__container container grid">
        <Link className="contact-link" to="/contact">
          <p className="contact__link">Send a message to Catherine</p>
        </Link>
      </div>
      {/*Envelope will display from 480px and lower (mobile)*/}
      <div className="mobile__message">
        <Link to="/contact">
          <i class="uil uil-envelope"></i>
        </Link>
      </div>
    </section>
  );
};
