import React from "react";
import "./bottomControls.scss";
const BottomControls = () => {
  return (
    <div className="bottomControls">
      <div className="controls">
        <div className="back">
          <img src={require("../../../assets/fast.png")} alt="back"></img>
        </div>

        <div className="pause">
          <p>||</p>
        </div>
        <div className="fast">
          <img src={require("../../../assets/fast.png")} alt="fast"></img>
        </div>
      </div>
    </div>
  );
};

export default BottomControls;
