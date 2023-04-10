import React, { useState, useContext } from "react";
import { NavContext } from "../../Context/NavContext";

import "./NextPageButton.css";

export const NextPageButton = () => {
  //Displays next page button
  const [show, setShow] = useState(false);
  //display in console where the current page is
  const { activeLinkId } = useContext(NavContext);

  //Displays next page button after 5 seconds. Also, button will disappear when it hits contact page
  setTimeout(() => {
    setShow(true);

    if (activeLinkId === "contact") {
      document.getElementById("right").style.webkitTransform = "rotate(180deg)";
    } else {
      document.getElementById("right").style.webkitTransform = "rotate(360deg)";
    }
  }, 1000);

  //click handler for 'Next Page Button', will scroll to next page and resets in the contact section
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
    } else if (activeLinkId === "contact") {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    } else {
      return null;
    }
  };

  return (
    <>
      {/*Display right arrow for 'Next Page Button' for small screens to large (481 and above)*/}
      {show && (
        <button
          onClick={handleNextPage}
          id="right"
          className="btn btn-primary next-page-button show_button__container"
        >
          {" "}
          <i class="uil uil-arrow-right" />
        </button>
      )}

      {/*Display down arrow for 'Next Page Button' for mobile(480 and below)*/}
      {show && (
        <button
          onClick={handleNextPage}
          id="down"
          className="btn btn-primary next-page-button show_button__container"
        >
          {" "}
          <i class="uil uil-arrow-down" />
        </button>
      )}
    </>
  );
};
