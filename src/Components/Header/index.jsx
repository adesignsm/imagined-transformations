import React from "react";
import "./Header.css";

import LOGO_PART_1 from "../../Assets/logo/Cycle.svg";
import LOGO_PART_2 from "../../Assets/logo/Centre.svg";

export const Header = () => {
  return (
    <header className="header">
      {/*Text will display for header from 480px and larger*/}
      <div className="header__container container grid">
        <div className="logo-container">
          <img className="logo-part-1" src={LOGO_PART_1} />
          <img className="logo-part-2"  src={LOGO_PART_2} />
        </div>
        <a className="contact-link" href="#contact">
          <p className="contact__link">Send a message to Catherine</p>
        </a>
      </div>
      {/*Envelope will display from 480px and lower (mobile)*/}
      <div className="mobile__message">
        <a href="#contact">
          <i className="uil uil-envelope"></i>
        </a>
        <div className="logo-container">
          <img className="logo-part-1" src={LOGO_PART_1} />
          <img className="logo-part-2"  src={LOGO_PART_2} />
        </div>
      </div>
    </header>
  );
};
