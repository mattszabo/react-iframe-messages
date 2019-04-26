import React from "react";
import "./App.css";
import Frame from "./components/Frame/Frame";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <div className="App">
      <header className="App-header">comms</header>
      <div className="grid-layout">
        <Panel className="App-panel content" />
        <Frame className="App-frame content" />
      </div>
    </div>
  );
}

export default App;
