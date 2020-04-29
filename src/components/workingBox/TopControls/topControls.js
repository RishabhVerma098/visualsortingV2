import React, { useState } from "react";
import "./topControls.scss";
import CustomDropdown from "./componentsResuable/dropdown/dropdown";
import CustomSlider from "./componentsResuable/slider/slider";
const TopControls = () => {
  const optionsForSorting = ["Bubble", "Selection", "Insetion"];
  const [currentForSorting, setCurrentForSorting] = useState(
    optionsForSorting[0]
  );
  const optionsForSpeed = ["Medium", "Slow", "Fast"];
  const [currentForSpeed, setCurrentForSpeed] = useState(optionsForSpeed[0]);
  return (
    <div className="topControl">
      <CustomDropdown
        options={optionsForSorting}
        setCurrent={setCurrentForSorting}
      />
      <CustomSlider />
      <CustomDropdown
        options={optionsForSpeed}
        setCurrent={setCurrentForSpeed}
      />
    </div>
  );
};

export default TopControls;
