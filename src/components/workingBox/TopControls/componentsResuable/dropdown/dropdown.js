import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dropdown.scss";
import { useAlert } from "react-alert";
const CustomDropdown = ({ options, setCurrent, current, message }) => {
  const onHandleChange = (e) => {
    setCurrent(e);
  };
  const alert = useAlert();
  return (
    <div
      className="customDropdown"
      onClick={
        message === null || message.code === 200
          ? null
          : () =>
              alert.error(
                <div style={{ color: "#eaf2ff", fontSize: "1.5rem" }}>
                  Please wait for Sorting to finish 🤚
                </div>
              )
      }
    >
      <Dropdown
        options={options}
        onChange={onHandleChange}
        value={current}
        placeholder="Select"
        disabled={message === null || message.code === 200 ? false : true}
        data-value={"glow"}
      />
    </div>
  );
};

export default CustomDropdown;
