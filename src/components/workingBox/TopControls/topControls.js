import React, { useState, useContext, useEffect } from "react";
import "./topControls.scss";
import CustomDropdown from "./componentsResuable/dropdown/dropdown";
import CustomSlider from "./componentsResuable/slider/slider";
import { SpeedContext } from "../../context/speedSorting";
import { BubbleSortContext } from "../../context/bubbleSort";
const TopControls = () => {
  const optionsForSorting = ["Bubble", "Selection", "Insetion"];
  const [currentForSorting, setCurrentForSorting] = useState(
    optionsForSorting[0]
  );
  const { optionsForSpeed, setCurrentForSpeed, currentForSpeed } = useContext(
    SpeedContext
  );
  const { setSpeed } = useContext(BubbleSortContext);

  const handleSpeed = () => {
    console.log(currentForSpeed.value);
    switch (currentForSpeed.value) {
      case "Medium":
        console.log("Med==500");
        setSpeed(500);
        break;
      case "Fast":
        console.log("fast==200");
        setSpeed(200);
        break;
      case "Slow":
        setSpeed(700);
        console.log("slow==700");
        break;
      default:
        setSpeed(500);
        console.log("default");
        break;
    }
  };

  useEffect(() => {
    handleSpeed();
  }, [currentForSpeed]);
  return (
    <div className="topControl">
      {/* <CustomDropdown
        options={optionsForSorting}
        setCurrent={setCurrentForSorting}
      /> */}
      <CustomSlider />
      <CustomDropdown
        options={optionsForSpeed}
        setCurrent={setCurrentForSpeed}
        current={currentForSpeed}
      />
    </div>
  );
};

export default TopControls;
