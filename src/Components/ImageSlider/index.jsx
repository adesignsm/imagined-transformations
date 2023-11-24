import { useState, useEffect } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from "@sanity/image-url";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [sliderImages, setSliderImages] = useState([]);
  const length = sliderImages.length;

  const builder = ImageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  }

  const fetchData = async () => {
    try {
      const query = `*[_type == 'about-copy'][0]{
        slider_images,
      }`;
      const result = await sanityClient.fetch(query);
      setSliderImages(result.slider_images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    if (sliderImages.length > 0) {
      const timer = setInterval(() => {
        nextSlide();
      }, 7000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [sliderImages]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };


  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }

  setTimeout(nextSlide, 7000);


  return (
    <div className="slider">
      {sliderImages.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={urlFor(slide.slider_image.asset._ref).url()} alt='travel image' className='image' />
            )}
          </div>
        );
      })}      
    </div>
  );
};

export default ImageSlider;
