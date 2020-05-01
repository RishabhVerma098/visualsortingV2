import React, { useState, createContext } from "react";

export const SortingDropDown = createContext();

const SortingDropDownProvider = (props) => {
  const optionsForSorting = [
    { value: "Bubble", label: "Bubble" },
    // { value: "Selection", label: "Selection" },
    // { value: "Insertion", label: "Insertion" },
  ];

  const [currentForSorting, setCurrentForSorting] = useState(
    optionsForSorting[0]
  );

  return (
    <SortingDropDown.Provider
      value={{
        optionsForSorting,
        currentForSorting,
        setCurrentForSorting,
      }}
    >
      {props.children}
    </SortingDropDown.Provider>
  );
};
export default SortingDropDownProvider;
