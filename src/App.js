import React from "react";
import "./App.scss";
import WorkingBox from "./components/workingBox/workingBox";
import BubbleSortContextProvider from "./components/context/bubbleSort";
import SliderContextProvider from "./components/context/Slider";
import SpeedContextProvider from "./components/context/speedSorting";
import SortingDropDownProvider from "./components/context/sortingDropDown";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
//import Content from "./components/content/content";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.FADE,
};

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="heading">
          <h3>Visual Sorting V2 </h3>
          <div className="name">
            <h6>By, Rishabh verma </h6>
            <a
              href="https://github.com/RishabhVerma098/visualsortingV2"
              target="_blank"
            >
              <img src={require("../src/assets/github.png")}></img>
            </a>
          </div>
        </div>
        <AlertProvider template={AlertTemplate} {...options}>
          <BubbleSortContextProvider>
            <SliderContextProvider>
              <SpeedContextProvider>
                <SortingDropDownProvider>
                  <WorkingBox />
                </SortingDropDownProvider>
              </SpeedContextProvider>
            </SliderContextProvider>
          </BubbleSortContextProvider>
        </AlertProvider>
      </div>
    </div>
  );
}

export default App;
