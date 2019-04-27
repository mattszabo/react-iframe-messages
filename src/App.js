import React from "react";
import Frame from "./components/Frame/Frame";
import Panel from "./components/Panel/Panel";
import { withIframeMessageHandler } from "./handlers/messageHandlers";
import "./App.css";

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

export default withIframeMessageHandler(App);
