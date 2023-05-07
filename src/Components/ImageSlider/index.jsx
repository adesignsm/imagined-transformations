import React, { useState } from "react";
import { photos } from "./photos";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current +1);
  };


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  setTimeout(nextSlide, 7000);


  return (
    <div className="slider">
      {photos.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt='travel image' className='image' />
            )}
          </div>
        );
      })}      
    </div>
  );
};

export default ImageSlider;
