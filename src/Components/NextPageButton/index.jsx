import React, { useState, useEffect, useContext } from "react";
import "./NextPageButton.css";
import { NavContext } from "../../Context/NavContext";

export const NextPageButton = () => {
  const [show, setShow] = useState(false);

  const [nextPage, setNextPage] = useState("home");

  const { activeLinkId } = useContext(NavContext);


  /*
const Links = ["home", "about", "testimonials", "services", "contact"];


  //Creates the side dots/links
  const renderNavLinks = (content) => {
    const scrollToId = `${content}`;
    const handleClickNav = () => {
      document.
        getElementById(scrollToId).
        scrollIntoView({ behavior: "smooth" });
    };

    return (

        <button onClick={handleClickNav} className="btn btn-primary next-page-button show_button__container">
          <i class="uil uil-arrow-right" />
        </button>

  )}
*/

setTimeout(() => {

  window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector(".next-page-button");
    //when scroll is higher than 560 viewport height, scroll button (show-scroll) will show
    if (this.scrollX < 6000) scrollUp.classList.add("show_button__container");
  else scrollUp.classList.remove("show_button__container");        
  })
  
  setShow(true)

}, 3000);




  const handleNextPage = () => {
    if (activeLinkId === "home") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (activeLinkId === "about") {
      document
        .getElementById("testimonials")
        .scrollIntoView({ behavior: "smooth" });
    } else if (activeLinkId === "testimonials") {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    } else if (activeLinkId === "services") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else {
      return null;
    }
  };

  return (
    <>
      {/*Links.map((link, i) => renderNavLinks(link))*/}
      {show && <button
        onClick={handleNextPage}
        className="btn btn-primary next-page-button show_button__container"
      > <i class="uil uil-arrow-right" /></button>
      }
    </>
  );
};
