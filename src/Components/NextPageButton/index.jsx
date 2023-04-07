import React, { useState, useContext } from "react";
import { NavContext } from "../../Context/NavContext";

import "./NextPageButton.css";

export const NextPageButton = () => {

  //Displays next page button
  const [show, setShow] = useState(false);
  //
  const { activeLinkId } = useContext(NavContext);

  setTimeout(() => {
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".next-page-button");
      //when scroll is higher than 560 viewport height, scroll button (show-scroll) will show
      if (this.scrollX < 6000) scrollUp.classList.add("show_button__container");
      else scrollUp.classList.remove("show_button__container");
    });

    setShow(true);
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
