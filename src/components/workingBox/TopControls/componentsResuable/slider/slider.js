import React, { useState } from "react";
import "./slider.scss";
//TODO:UNINSTALL REACT-SLIDER
const CustomSlider = () => {
  const [width, setWidth] = useState(40);

  const changeWidth = (add) => {
    if (add) {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 10);
      }
    } else {
      if (width > 10) {
        setWidth((prevWidth) => prevWidth - 10);
      }
    }
  };

  return (
    <div className="slider">
      <div className="plus" onClick={() => changeWidth(true)}>
        <img src={require("../../../../../assets/plus.png")} alt="+"></img>
      </div>
      <div className="range">
        <div className="bar" style={{ width: `${width}%` }}></div>
        <p>{width / 10}</p>
      </div>
      <div className="minus" onClick={() => changeWidth(false)}>
        <img src={require("../../../../../assets/minus.png")} alt="-"></img>
      </div>
    </div>
  );
};

export default CustomSlider;
