import React from "react";
import img1 from "../assets/lenta-2.jpg";
import img2 from "../assets/lenta-3.jpg";
import "../style/Slider.css";
const Slider = () => {
  return (
    <div className="slider_container">
      <div className="slider_wrapper">
        <div className="lenta1_container">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
