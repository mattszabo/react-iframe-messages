import React from "react";
import Content from "./Content";

export default () => {
  const doc = document.getElementById("iframeId").contentWindow.document;
  doc.open();
  const content = React.renderComponentToString(<Content />);
  doc.write(content);
  doc.close();
};
