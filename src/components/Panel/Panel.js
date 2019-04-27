import React, { Fragment, useState } from "react";
import "./Panel.css";

const Panel = ({ className }) => {
  const postMessage = message => event => {
    event.preventDefault();
    console.log("event", event);
    const iframeWindow = document.getElementById("my-iframe").contentWindow;
    iframeWindow.postMessage(message, "http://localhost:3000");
  };

  const [inputText, setInputText] = useState("");

  const handleInputTextChange = e => {
    setInputText(e.target.value);
  };

  return (
    <div className={className}>
      <Fragment>
        <header>I live in the parent window</header>
        <form onSubmit={postMessage(inputText)}>
          <label>
            Text:
            <input
              type="text"
              value={inputText}
              onChange={handleInputTextChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>no text</p>
      </Fragment>
    </div>
  );
};

export default Panel;
