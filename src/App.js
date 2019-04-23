import React from "react";
import "./App.css";
import IFrame from "./IFrame";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <IFrame>
        <Content />
      </IFrame>
    </div>
  );
}

export default App;
