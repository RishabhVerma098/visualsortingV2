import React from "react";
import "./App.scss";
import WorkingBox from "./components/workingBox/workingBox";
import BubbleSortContextProvider from "./components/context/bubbleSort";
import SliderContextProvider from "./components/context/Slider";
import SpeedContextProvider from "./components/context/speedSorting";
function App() {
  return (
    <div className="App">
      <BubbleSortContextProvider>
        <SliderContextProvider>
          <SpeedContextProvider>
            <WorkingBox />
          </SpeedContextProvider>
        </SliderContextProvider>
      </BubbleSortContextProvider>
    </div>
  );
}

export default App;
