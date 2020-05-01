import React, { useState, createContext } from "react";

export const SpeedContext = createContext();

const SpeedContextProvider = (props) => {
  const optionsForSpeed = [
    { value: "Medium", label: "Medium" },
    { value: "Slow", label: "Slow" },
    { value: "Fast", label: "Fast" },
  ];
  const [currentForSpeed, setCurrentForSpeed] = useState(optionsForSpeed[0]);
  return (
    <SpeedContext.Provider
      value={{
        optionsForSpeed,
        currentForSpeed,
        setCurrentForSpeed,
      }}
    >
      {props.children}
    </SpeedContext.Provider>
  );
};
export default SpeedContextProvider;
