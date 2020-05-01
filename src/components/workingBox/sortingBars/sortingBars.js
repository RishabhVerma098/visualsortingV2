import React, { useState, useEffect, useContext } from "react";
import "./sortingBars.scss";
import { random } from "lodash";
import uuid from "react-uuid";
import { motion } from "framer-motion";
import { BubbleSortContext } from "../../context/bubbleSort";
import { SliderContext } from "../../context/Slider";
const SortingBox = () => {
  const { bars, setBars, message, bubbleSortOptimised } = useContext(
    BubbleSortContext
  );
  const { width } = useContext(SliderContext);
  const numberOfBars = width / 10;
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
  }, [width]);
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <div className="sortingBox">
      <ul className="hey">
        {bars.map((bar) => {
          return (
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={bar.id}
              className="bar"
              style={{ height: `${bar.height}%` }}
              positionTransition={spring}
            >
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
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortingBox;

// const bubbleSort = async () => {
//   let newBarList = bars;
//   let len = bars.length;
//   let flag = true;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1; j++) {
//       if (newBarList[j].height > newBarList[j + 1].height) {
//         newBarList[j].color.background =
//           "linear-gradient(to bottom, #36d1dc, #5b86e5)";
//         newBarList[j + 1].color.background =
//           "linear-gradient(to bottom, #36d1dc, #5b86e5)";
//         setBars([...newBarList]);
//         await timeout(500);
//         let tmp = newBarList[j];
//         newBarList[j] = newBarList[j + 1];
//         newBarList[j + 1] = tmp;
//         newBarList[j].color.background =
//           "linear-gradient(to top, #1d976c, #93f9b9)";
//         newBarList[j + 1].color.background =
//           "linear-gradient(to top, #1d976c, #93f9b9)";
//         setBars([...newBarList]);
//         await timeout(350);
//         newBarList[j].color.background =
//           "linear-gradient(to bottom, #fdc830, #f37335)";
//         newBarList[j + 1].color.background =
//           "linear-gradient(to bottom, #fdc830, #f37335)";
//         setBars([...newBarList]);
//         await timeout(500);
//         flag = false;
//       }
//       if (flag) {
//         newBarList[j].color.background = "black";
//         newBarList[j + 1].color.background = "black";
//         setBars([...newBarList]);
//         await timeout(350);
//         newBarList[j].color.background =
//           "linear-gradient(to bottom, #fdc830, #f37335)";
//         newBarList[j + 1].color.background =
//           "linear-gradient(to bottom, #fdc830, #f37335)";
//         setBars([...newBarList]);
//         await timeout(500);
//       }
//       flag = true;
//     }
//   }
// };
