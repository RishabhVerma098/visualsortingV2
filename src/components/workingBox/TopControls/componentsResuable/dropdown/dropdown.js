import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dropdown.scss";
const CustomDropdown = ({ options, setCurrent, current }) => {
  const onHandleChange = (e) => {
    setCurrent(e);
  };
  return (
    <div className="customDropdown">
      <Dropdown
        options={options}
        onChange={onHandleChange}
        value={current}
        placeholder="Select"
      />
    </div>
  );
};

export default CustomDropdown;
