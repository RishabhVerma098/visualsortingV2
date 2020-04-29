import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dropdown.scss";
const CustomDropdown = ({ options, setCurrent }) => {
  const onChange = (e) => {
    setCurrent(e.value);
  };

  return (
    <div className="customDropdown">
      <Dropdown
        options={options}
        onChange={onChange}
        value={options[0]}
        placeholder="Select an option"
      />
    </div>
  );
};

export default CustomDropdown;
