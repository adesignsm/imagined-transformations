import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <section className="header">
      <div className="header__container container grid">
          <Link className="contact-link" to="/contact"><p className="contact__link">Send a message to Catherine</p></Link>
      </div>
      <div className="mobile__message">
        <Link to="/contact"><i class="uil uil-envelope"></i></Link>
      </div>
    </section>
  )
}

