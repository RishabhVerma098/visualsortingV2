import React, { useState, useEffect } from "react";
import "./codeBox.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBox = () => {
  const codeStringJavascript = {
    lang: "javascript",
    code: `
    //Javascript 
    let bubbleSort = (inputArr) => {
      let len = inputArr.length;
      let swapped;
      do {
          swapped = false;
          for (let i = 0; i < len; i++) {
              if (inputArr[i] > inputArr[i + 1]) {
                  let tmp = inputArr[i];
                  inputArr[i] = inputArr[i + 1];
                  inputArr[i + 1] = tmp;
                  swapped = true;
              }
          }
      } while (swapped);
      return inputArr;
  };`,
  };

  const codeStringPython = {
    lang: "python",
    code: `
    #Python
      def bubbleSort(arr):
          n = len(arr) 
          for i in range(n-1): 
            for j in range(0, n-i-1): 
                if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j] 
    `,
  };

  const [currentCode, setCurrentCode] = useState(codeStringJavascript);

  return (
    <div className="codeBox">
      <SyntaxHighlighter
        language={currentCode.lang}
        style={dark}
        customStyle={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
          fontSize: "1.6rem",
          fontFamily: "Montserrat, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentCode.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
