import React, { useState, useEffect, useContext } from "react";
import "./NextPageButton.css";
import arrow from "../../Assets/Arrow.png";
import { NavContext } from "../../Context/NavContext";
import { Link } from "react-router-dom";

export const NextPageButton = () => {
  const [show, setShow] = useState(false);

  const { activeLinkId } = useContext(NavContext);

  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".next-page-button");
    //when scroll is higher than 560 viewport height, scroll button (show-scroll) will show
    if (this.scrollX < 5000) {
      scrollUp.classList.add("show_button__container");
    } else scrollUp.classList.remove("show_button__container");
  });

  //organizing links with an array which can later be mapped out

  return (
    <>
      <button onClick="" className="btn btn-primary next-page-button">
        <i class="uil uil-arrow-right" />
      </button>
    </>
  );
};
