import React from "react";
import "./App.css";
import Frame from "./components/Frame/Frame";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <div className="App">
      <header className="App-header">comms</header>
      <Panel className="App-panel" />
      <Frame className="App-frame" />
    </div>
  );
}

export default App;
