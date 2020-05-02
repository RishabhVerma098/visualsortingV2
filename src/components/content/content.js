import React, { useState, useEffect } from "react";
import "./content.scss";
import { motion } from "framer-motion";
function Content() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showBoxByScroll, setShowBoxByScroll] = useState(false);
  const [hide, setHide] = useState(false);
  const [xPos, setxPos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition >= 700) {
      console.log("greate than 700");
      setShowBoxByScroll(true);
    }
    if (scrollPosition <= 700) {
      setShowBoxByScroll(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (hide) {
      setxPos(250);
    } else {
      setxPos(0);
    }
  }, [hide]);

  console.log(xPos);
  return (
    <div className="content">
      <h1>Hello world</h1>
      {showBoxByScroll ? (
        <motion.div
          initial={{
            x: 300,
          }}
          animate={{
            x: xPos,
          }}
          transition={{
            duration: 1,
          }}
          className="smallBox"
        >
          <h3
            onClick={() => {
              setHide(!xPos);
            }}
          >
            hello world
          </h3>
        </motion.div>
      ) : null}
    </div>
  );
}
export default Content;
