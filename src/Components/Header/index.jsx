import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <section className="header container">
      <div className="header__container grid">
          <Link className="contact-link" to="/contact"><p className="contact__link">Send a message to Catherine</p></Link>
      </div>
    </section>
  )
}

