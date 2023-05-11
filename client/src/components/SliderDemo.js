import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderDemo = () => {
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="properties pb-20">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="assets/img/gallery/featured1.png" alt="" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application design</a>
              </h3>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="restaurant-name">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <p>
                    <span>(4.5)</span> based on 120
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="properties pb-20">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="assets/img/gallery/featured1.png" alt="" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application design</a>
              </h3>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="restaurant-name">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <p>
                    <span>(4.5)</span> based on 120
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="properties pb-20">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="assets/img/gallery/featured1.png" alt="" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application design</a>
              </h3>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="restaurant-name">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <p>
                    <span>(4.5)</span> based on 120
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="properties pb-20">
          <div className="properties__card">
            <div className="properties__img overlay1">
              <a href="#">
                <img src="assets/img/gallery/featured1.png" alt="" />
              </a>
            </div>
            <div className="properties__caption">
              <p>User Experience</p>
              <h3>
                <a href="#">Fundamental of UX for Application design</a>
              </h3>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <div className="properties__footer d-flex justify-content-between align-items-center">
                <div className="restaurant-name">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <p>
                    <span>(4.5)</span> based on 120
                  </p>
                </div>
                <div className="price">
                  <span>$135</span>
                </div>
              </div>
              <a href="#" className="border-btn border-btn2">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </Carousel>
      ;
    </>
  );
};

export default SliderDemo;
