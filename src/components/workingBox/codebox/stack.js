import React, { useState, useEffect, useRef } from "react";
import "./stack.scss";
import { motion } from "framer-motion";
function MessageStack({ message }) {
  const [list, setList] = useState([]);

  const generateList = () => {
    let x = list;
    x.push({
      message: message.message,
      array: [...message.array],
      code: message.code,
      value: message.value,
    });
    setList([...x]);
  };

  useEffect(() => {
    generateList();
  }, [message]);

  //console.log(list);

  const styleMessage = (code) => {
    switch (code) {
      case 100:
        return {
          fontSize: "2rem",
          color: "#528bff",
          padding: "1rem",
          borderRadius: "5px",
        };
      case 200:
        return {
          fontSize: "2rem",

          color: "#93f9b9",
          padding: "1rem",
          borderRadius: "5px",
        };
      case 400:
        return {
          color: "coral",

          padding: "1rem",
          borderRadius: "5px",
        };
      case 401:
        return {
          color: "#93f9b9",

          padding: "1rem",
          borderRadius: "5px",
        };
      case 402:
        return {
          color: "red",

          padding: "1rem",
          borderRadius: "5px",
        };
      default:
        break;
    }
  };

  return (
    <ul className="messageStack">
      {list.map((i) => {
        return (
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="stack"
          >
            <div className="hollowStack">
              <div className="message">
                <p style={styleMessage(i.code)}>{i.message}</p>
              </div>
              <div className="currentArray">
                <ul className="array">
                  [
                  {i.array.map((x) => {
                    return <li>| {x.height} | </li>;
                  })}
                  ]
                </ul>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
export default MessageStack;
