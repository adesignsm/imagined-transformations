import React, { useContext } from "react";
import "./Navigation.css";
import { NavContext } from "../../Context/NavContext";

export const Navigation = () => {

  const { activeLinkId } = useContext(NavContext);

  console.log(activeLinkId);

  //organizing links with an array which can later be mapped out
  const Links = ["home", "about", "testimonials", "services", "contact"];

  //Creates the side dots/links
  const renderNavLinks = (content) => {
    const scrollToId = `${content}`;

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
            id={activeLinkId === content ?  "active" : "nav-Link" } 
            onClick={handleClickNav}
          >
          </button>
        </li>
      </ul>
    );
  };

  return (
    <>
      <nav className="navigation">
        {Links.map((link, i) => renderNavLinks(link))}

        {/*
          <li>
            <NavLink
              smooth to="/"
              id="home"
              className="nav-link"
              activeClassName="active"
            >
            </NavLink>
          </li>

          <li>
            <NavLink
              to={Links[1].to}
              id="about"
              className="nav-link"
              activeClassName="active"
            >
            </NavLink>
          </li>


          <li>
            <NavLink
              to={Links[2].to}
              id="about"
              className="nav-link"
              activeclassname="active"
            >
            </NavLink>
          </li>


          <li>
            <HashLink
              to={Links[3].to}
              id="about"
              className="nav-link"
              activeClassName="active"
            >
            </HashLink>
          </li>

          <li>
            <HashLink
              to={Links[4].to}
              id="about"
              className="nav-link"
              activeClassName="active"
            >
            </HashLink>
          </li>
*/}
      </nav>
    </>
  );
};
