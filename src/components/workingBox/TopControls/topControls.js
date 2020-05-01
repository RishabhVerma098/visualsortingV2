import React, { useState, useContext, useEffect } from "react";
import "./topControls.scss";
import CustomDropdown from "./componentsResuable/dropdown/dropdown";
import CustomSlider from "./componentsResuable/slider/slider";
import { SpeedContext } from "../../context/speedSorting";
import { BubbleSortContext } from "../../context/bubbleSort";
import { SortingDropDown } from "../../context/sortingDropDown";
const TopControls = () => {
  const { optionsForSpeed, setCurrentForSpeed, currentForSpeed } = useContext(
    SpeedContext
  );
  const { setSpeed, message } = useContext(BubbleSortContext);
  const {
    optionsForSorting,
    currentForSorting,
    setCurrentForSorting,
  } = useContext(SortingDropDown);
  const handleSpeed = () => {
    switch (currentForSpeed.value) {
      case "Medium":
        setSpeed(500);
        break;
      case "Fast":
        setSpeed(200);
        break;
      case "Slow":
        setSpeed(700);

        break;
      default:
        setSpeed(500);
        break;
    }
  };

  useEffect(() => {
    handleSpeed();
  }, [currentForSpeed]);
  return (
    <div className="topControl">
      <CustomDropdown
        options={optionsForSorting}
        setCurrent={setCurrentForSorting}
        current={currentForSorting}
        message={message}
      />
      <CustomSlider />
      <CustomDropdown
        options={optionsForSpeed}
        setCurrent={setCurrentForSpeed}
        current={currentForSpeed}
        message={message}
      />
    </div>
  );
};

export default TopControls;
