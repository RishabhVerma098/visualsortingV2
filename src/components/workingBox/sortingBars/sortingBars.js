import React, { useState, useEffect } from "react";
import "./sortingBars.scss";
import { random } from "lodash";
import uuid from "react-uuid";
const SortingBox = () => {
  const numberOfBars = 10;
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const initailBars = [];
    for (let i = 0; i < numberOfBars; i++) {
      initailBars.push({
        height: random(15, 95),
        color: {
          boxShadow: "0px 0px 14px 2px rgba(255, 128, 82, 0.45)",
          background: "linear-gradient(to bottom, #fdc830, #f37335)",
        },
        id: uuid(),
      });
    }
    setBars([...initailBars]);
  }, []);

  console.log(bars);
  return (
    <div className="sortingBox">
      {bars.map((bar) => {
        return (
          <div className="bar" style={{ height: `${bar.height}%` }}>
            <div className="hollow">
              <div
                className="fill"
                style={{
                  background: `${bar.color.background}`,
                  boxShadow: `${bar.color.boxShadow}`,
                }}
              >
                <p>{bar.height}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SortingBox;
