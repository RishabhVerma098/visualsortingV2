import React, { useState, createContext } from "react";

export const BubbleSortContext = createContext();

const BubbleSortContextProvider = (props) => {
  const [bars, setBars] = useState([]);
  const [message, setMessage] = useState(null);
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

  return (
    <BubbleSortContext.Provider
      value={{ bars, setBars, message, bubbleSortOptimised }}
    >
      {props.children}
    </BubbleSortContext.Provider>
  );
};
export default BubbleSortContextProvider;
