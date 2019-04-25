import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const IFrame = ({ children, textHandler, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && contentRef.contentWindow.document.body;

  useEffect(() => {
    const receiveMessage = event => {
      console.log("event in iframe:", event);
      if (event.origin !== "http://localhost:3000") {
        console.log("You are not worthy");
      } else {
        console.log("I got " + event.data + " from " + event.origin);
        textHandler(event.data);
      }
    };

    contentRef &&
      contentRef.contentWindow.addEventListener(
        "message",
        receiveMessage,
        false
      );
    return () =>
      contentRef &&
      contentRef.contentWindow.removeEventListener("message", receiveMessage);
  }, [contentRef, textHandler]);

  useEffect(() => {
    window.postMessage("ready", "http://localhost:3000/");
  }, []);

  return (
    <iframe title="my-iframe" id="my-iframe" {...props} ref={setContentRef}>
      {mountNode && createPortal(React.Children.only(children), mountNode)}
    </iframe>
  );
};

export default IFrame;
