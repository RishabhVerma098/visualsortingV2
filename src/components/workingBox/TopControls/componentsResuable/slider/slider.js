import React, { useState } from "react";
import "./slider.scss";
//TODO:UNINSTALL REACT-SLIDER
const CustomSlider = () => {
  const [width, setWidth] = useState(40);

  const changeWidth = (add) => {
    if (add) {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 5);
      }
    } else {
      if (width > 5) {
        setWidth((prevWidth) => prevWidth - 5);
      }
    }
  };

  return (
    <div className="slider">
      <div className="plus" onClick={() => changeWidth(true)}>
        <img src={require("../../../../../assets/plus.png")}></img>
      </div>
      <div className="range">
        <div className="bar" style={{ width: `${width}%` }}></div>
        <p>{width / 5}</p>
      </div>
      <div className="minus" onClick={() => changeWidth(false)}>
        <img src={require("../../../../../assets/minus.png")}></img>
      </div>
    </div>
  );
};

export default CustomSlider;
