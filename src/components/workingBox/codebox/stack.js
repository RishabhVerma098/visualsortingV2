import React, { useState, useEffect, useRef } from "react";
import "./stack.scss";
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
          backgroundColor: "#528bff",
          padding: "1rem",
          borderRadius: "5px",
        };
      case 200:
        return {
          fontSize: "2rem",
          backgroundColor: "#93f9b9",
          padding: "1rem",
          borderRadius: "5px",
          color: "black",
        };
      case 400:
        return {
          backgroundColor: "coral",
          padding: "1rem",
          borderRadius: "5px",
        };
      case 401:
        return {
          backgroundColor: "#93f9b9",
          padding: "1rem",
          borderRadius: "5px",
          color: "black",
        };
      case 402:
        return {
          backgroundColor: "#7d8390",
          padding: "1rem",
          borderRadius: "5px",
          color: "black",
        };
      default:
        break;
    }
  };

  const endRef = useRef(null);

  // useEffect(() => {
  //   // endRef.current.scrollTop({
  //   //   behavior: "smooth",
  //   //   // block: "nearest",
  //   //   inline: "start",
  //   // });
  //   endRef.current.scrollIntoView();
  // }, [list]);

  return (
    <ul className="messageStack" >
      {list.map((i) => {
        return (
          <li className="stack">
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
          </li>
        );
      })}
      <div style={{ visibility: "hidden" }} >
        dunmmy
      </div>
    </ul>
  );
}
export default MessageStack;