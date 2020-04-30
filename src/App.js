import React from "react";
import "./App.scss";
import WorkingBox from "./components/workingBox/workingBox";
import ThemeContextProvider from "./components/context/bubbleSort";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <WorkingBox />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
