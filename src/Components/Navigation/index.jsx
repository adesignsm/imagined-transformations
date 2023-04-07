import React, { useContext } from "react";
import "./Navigation.css";
import { NavContext } from "../../Context/NavContext";

export const Navigation = () => {
  //Will display in console where the current page is located
  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);

  //organizing links with an array which can later be mapped out
  const Links = ["home", "about", "testimonials", "services", "contact"];

  //Creates the side dots/links
  const renderNavLinks = (content) => {
    const scrollToId = `${content}`;

    //handle click function for button
    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <ul className="nav-links" key={content}>
        <li>
          <button
            className="nav-link"
            id={activeLinkId === content ? "active" : "nav-Link"}
            onClick={handleClickNav}
          ></button>
        </li>
      </ul>
    );
  };

  return (
    <>
      <nav className="navigation">
        {Links.map((link, i) => renderNavLinks(link))}
      </nav>
    </>
  );
};
