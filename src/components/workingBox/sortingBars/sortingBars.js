import React, { useState, useEffect } from "react";
import "./sortingBars.scss";
import { random } from "lodash";
import uuid from "react-uuid";
import { motion } from "framer-motion";
const SortingBox = () => {
  const numberOfBars = 5;
  const [bars, setBars] = useState([]);
  const [message, setMessage] = useState(null);
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

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  let bubbleSortOptimised = async () => {
    let newBarList = bars;
    let len = bars.length;
    let swapped;
    setMessage("Starting Bubble Sort");
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (newBarList[i].height > newBarList[i + 1].height) {
          newBarList[i].color.background =
            "linear-gradient(to bottom, #36d1dc, #5b86e5)";
          newBarList[i + 1].color.background =
            "linear-gradient(to bottom, #36d1dc, #5b86e5)";
          setBars([...newBarList]);
          setMessage(
            `Swaping bar with value ${newBarList[i].height} and ${
              newBarList[i + 1].height
            }`
          );
          await timeout(500);
          let tmp = newBarList[i];
          newBarList[i] = newBarList[i + 1];
          newBarList[i + 1] = tmp;
          swapped = true;
          newBarList[i].color.background =
            "linear-gradient(to top, #1d976c, #93f9b9)";
          newBarList[i + 1].color.background =
            "linear-gradient(to top, #1d976c, #93f9b9)";
          setBars([...newBarList]);
          setMessage(`Swaped!!`);
          await timeout(350);
          newBarList[i].color.background =
            "linear-gradient(to bottom, #fdc830, #f37335)";
          newBarList[i + 1].color.background =
            "linear-gradient(to bottom, #fdc830, #f37335)";
          setBars([...newBarList]);
          await timeout(500);
        } else {
          setMessage(`Already in place`);
        }
      }
    } while (swapped);
    setBars([...newBarList]);
    setMessage("Ending Bubble Sort");
  };
  console.log(message);
  return (
    <div className="sortingBox" onClick={bubbleSortOptimised}>
      <ul className="hey">
        {bars.map((bar) => {
          return (
            <motion.li
              key={bar.id}
              className="bar"
              style={{ height: `${bar.height}%` }}
              //layoutTransition={spring}
              positionTransition
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
