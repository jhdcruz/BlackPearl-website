import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Images/Slideshow Import (Do not tolerate!)
import img1 from "images/menu/1.jpg";
import img2 from "images/menu/2.jpg";
import img3 from "images/menu/3.jpg";
import img4 from "images/menu/4.jpg";
import img5 from "images/menu/5.jpg";
import img6 from "images/menu/6.jpg";
import img7 from "images/menu/7.jpg";
import img8 from "images/menu/8.jpg";
import img9 from "images/menu/9.jpg";
import img10 from "images/menu/10.jpg";
import img11 from "images/menu/11.jpg";
import img12 from "images/menu/12.jpg";
import img13 from "images/menu/13.jpg";
import img14 from "images/menu/14.jpg";
import img15 from "images/menu/15.jpg";
import img16 from "images/menu/16.jpg";

/*
 * ===================
 * Component Style
 * ===================
 */
const StyledCarousel = styled(Carousel)`
  display: block;
  padding: 0 8%;

  .carousel.carousel-slider {
    margin: 10px auto !important;
    border-radius: 8px;
    min-height: auto;
    max-height: 600px !important;
    box-shadow: 3px 2px 5px rgba(255, 128, 162, 0.8);

    img {
      image-rendering: optimizeQuality;
    }
  }
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function MenuCarousel() {
  return (
    <>
      <StyledCarousel
        showThumbs={false}
        showStatus={false}
        dynamicHeight
        infiniteLoop
        emulateTouch
        useKeyboardArrows
        autoPlay
      >
        <div>
          <img src={img1} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img2} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img3} alt="" />
          {/* <p className="legend">Coolers</p> */}
        </div>
        <div>
          <img src={img4} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img5} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img6} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img7} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img8} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img9} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img10} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img11} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img12} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img13} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img14} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img15} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img16} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </StyledCarousel>
    </>
  );
}
