import React from "react";
import "./workingBox.scss";
import BottomControls from "./bottomControls/bottomControls";
import CodeBox from "./codebox/codeBox";
import SortingBox from "./sortingBars/sortingBars";
import TopControls from "./TopControls/topControls";
const WorkingBox = () => {
  return (
    <div className="WorkingBox">
      <div className="left-container">
        <TopControls />
        <SortingBox />
        <BottomControls />
      </div>
      <div className="right-container">
        <CodeBox />
      </div>
    </div>
  );
};
export default WorkingBox;
