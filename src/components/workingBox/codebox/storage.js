import React, { useState, useEffect } from "react";
import "./storage.scss";

function StorageMessage() {
  const [open, setOpen] = useState(false);

  const closeTab = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
        className="storageMessage"
      >
        <h3>Previous Call Stack</h3>
      </div>
      <div className="box">
        <h5 onClick={closeTab}>HA</h5>
      </div>
    </div>
  );
}

export default StorageMessage;
