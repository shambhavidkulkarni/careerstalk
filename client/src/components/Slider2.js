import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider2 = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="single-cat text-center">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt="" />
          </div>
          <div className="cat-cap">
            <h5>
              <a href="services.html">Mr. Urela</a>
            </h5>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="single-cat text-center">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt="" />
          </div>
          <div className="cat-cap">
            <h5>
              <a href="services.html">Mr. Urela</a>
            </h5>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="single-cat text-center">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt="" />
          </div>
          <div className="cat-cap">
            <h5>
              <a href="services.html">Mr. Urela</a>
            </h5>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="single-cat text-center">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt="" />
          </div>
          <div className="cat-cap">
            <h5>
              <a href="services.html">Mr. Urela</a>
            </h5>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
        <div className="single-cat text-center">
          <div className="cat-icon">
            <img src="assets/img/gallery/team1.png" alt="" />
          </div>
          <div className="cat-cap">
            <h5>
              <a href="services.html">Mr. Urela</a>
            </h5>
            <p>The automated process all your website tasks.</p>
          </div>
        </div>
      </Carousel>
      
    </>
  );
};

export default Slider2;
