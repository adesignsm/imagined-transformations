import React from "react";
import "./Background.css";

export const Background = () => {
  return (
    <div className="blob__container">
      <div id="overlay" />
      <div className="blob-c">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
        <div className="shape-blob three"></div>
        <div className="shape-blob four"></div>
        <div className="shape-blob five"></div>
        <div className="shape-blob six"></div>
      </div>
    </div>
  );
};
