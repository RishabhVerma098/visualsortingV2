import React from "react";
import "./App.scss";
import WorkingBox from "./components/workingBox/workingBox";
import BubbleSortContextProvider from "./components/context/bubbleSort";
function App() {
  return (
    <div className="App">
      <BubbleSortContextProvider>
        <WorkingBox />
      </BubbleSortContextProvider>
    </div>
  );
}

export default App;
