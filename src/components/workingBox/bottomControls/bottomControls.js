import React, { useContext, useEffect } from "react";
import "./bottomControls.scss";
import { BubbleSortContext } from "../../context/bubbleSort";
import { sortBy } from "lodash";

const BottomControls = () => {
  const { message, bubbleSortOptimised } = useContext(BubbleSortContext);

  return (
    <div className="bottomControls">
      <div className="controls">
        {message === null || message.code === 200 ? (
          <div className="sort">
            <button onClick={bubbleSortOptimised}>Sort</button>
          </div>
        ) : (
          <div className="message">
            <p>{message.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomControls;
