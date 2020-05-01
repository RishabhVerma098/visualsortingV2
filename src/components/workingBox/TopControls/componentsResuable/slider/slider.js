import React, { useContext, useState, useEffect } from "react";
import "./slider.scss";
import { SliderContext } from "../../../../context/Slider";
import { BubbleSortContext } from "../../../../context/bubbleSort";

//TODO:UNINSTALL REACT-SLIDER
const CustomSlider = () => {
  const { width, changeWidth } = useContext(SliderContext);
  const { message } = useContext(BubbleSortContext);
  const [enable, setEnable] = useState(true);
  const enableIcons = () => {
    if (message === null || message.code === 200) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };
  useEffect(() => {
    enableIcons();
  }, [message]);

  return (
    <div className="slider">
      <div className="plus" onClick={() => (enable ? changeWidth(true) : null)}>
        <p style={enable ? { color: "#eaf2ff" } : { color: "#7d8390" }}>+</p>
      </div>
      <div className="range">
        <div className="bar" style={{ width: `${width}%` }}></div>
        <p>{width / 10}</p>
      </div>
      <div
        className="minus"
        onClick={() => (enable ? changeWidth(false) : null)}
      >
        <p style={enable ? { color: "#eaf2ff" } : { color: "#7d8390" }}>-</p>
      </div>
    </div>
  );
};

export default CustomSlider;
