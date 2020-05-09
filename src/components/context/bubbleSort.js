import React, { useState, createContext } from "react";

export const BubbleSortContext = createContext();

const BubbleSortContextProvider = (props) => {
  const [bars, setBars] = useState([]);
  const [message, setMessage] = useState(null);
  const [speed, setSpeed] = useState(500);
  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  let bubbleSortOptimised = async () => {
    let newBarList = bars;
    let len = bars.length;
    let swapped;
    setMessage({
      message: "Starting Bubble Sort , Original array ",
      code: 100,
      array: [...bars],
      value: [],
    });
    await timeout(speed);
    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (newBarList[i].height > newBarList[i + 1].height) {
          newBarList[i].color.background =
            "linear-gradient(to bottom, #36d1dc, #5b86e5)";
          newBarList[i + 1].color.background =
            "linear-gradient(to bottom, #36d1dc, #5b86e5)";
          setBars([...newBarList]);
          setMessage({
            message: `Swaping bar with value ${newBarList[i].height} and ${
              newBarList[i + 1].height
            }`,
            code: 400,
            array: [...bars],
            value: [newBarList[i].height, newBarList[i + 1].height],
          });
          await timeout(speed);
          let tmp = newBarList[i];
          newBarList[i] = newBarList[i + 1];
          newBarList[i + 1] = tmp;
          swapped = true;
          newBarList[i].color.background =
            "linear-gradient(to top, #1d976c, #93f9b9)";
          newBarList[i + 1].color.background =
            "linear-gradient(to top, #1d976c, #93f9b9)";
          setBars([...newBarList]);
          setMessage({
            message: `Swaped!!`,
            code: 401,
            array: [...bars],
            value: [],
          });
          await timeout(speed - 150);
          newBarList[i].color.background =
            "linear-gradient(to bottom, #fdc830, #f37335)";
          newBarList[i + 1].color.background =
            "linear-gradient(to bottom, #fdc830, #f37335)";
          setBars([...newBarList]);
          await timeout(speed);
        } else {
          setMessage({
            message: `Already in place`,
            code: 402,
            array: [...bars],
            value: [],
          });
        }
      }
    } while (swapped);
    setBars([...newBarList]);
    setMessage({
      message: "Ending Bubble Sort",
      code: 200,
      array: [...bars],
      value: [],
    });
  };

  return (
    <BubbleSortContext.Provider
      value={{
        bars,
        setBars,
        message,
        bubbleSortOptimised,
        setSpeed,
        setMessage,
      }}
    >
      {props.children}
    </BubbleSortContext.Provider>
  );
};
export default BubbleSortContextProvider;
