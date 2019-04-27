import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import parentWindowMessageHandler from "../../handlers/parentWindowMessageHandler";

const IFrame = ({ children, textHandler, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && contentRef.contentWindow.document.body;

  useEffect(() => {
    const configureEventHandler = messageHandler => {
      contentRef &&
        contentRef.contentWindow.addEventListener(
          "message",
          messageHandler,
          false
        );

      return () =>
        contentRef &&
        contentRef.contentWindow.removeEventListener("message", messageHandler);
    };
    const messageHandler = parentWindowMessageHandler({ textHandler });
    configureEventHandler(messageHandler);
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
