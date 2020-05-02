import React, { useContext } from "react";
import "./bottomControls.scss";
import { BubbleSortContext } from "../../context/bubbleSort";
import { shuffle } from "lodash";

const BottomControls = () => {
  const {
    message,
    bubbleSortOptimised,
    bars,
    setBars,
    setMessage,
  } = useContext(BubbleSortContext);

  const shuffleList = () => {
    let newList = shuffle(bars);
    setBars([...newList]);
    setMessage(null);
  };

  return (
    <div className="bottomControls">
      <div className="controls">
        {message === null ? (
          <div className="sort">
            <button onClick={bubbleSortOptimised}>Sort</button>
          </div>
        ) : message.code === 200 ? (
          <div className="sort">
            <button onClick={shuffleList}>Suffle</button>
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
