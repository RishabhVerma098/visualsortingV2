import React, { useState, createContext } from "react";

export const SliderContext = createContext();

const SliderContextProvider = (props) => {
  const [width, setWidth] = useState(40);
  const changeWidth = (add) => {
    if (add) {
      if (width < 100) {
        setWidth((prevWidth) => prevWidth + 10);
      }
    } else {
      if (width > 10) {
        setWidth((prevWidth) => prevWidth - 10);
      }
    }
  };
  return (
    <SliderContext.Provider value={{ width, changeWidth }}>
      {props.children}
    </SliderContext.Provider>
  );
};
export default SliderContextProvider;
