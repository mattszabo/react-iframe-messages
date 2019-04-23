import React from "react";

const content = () => (
  <button
    onSubmit={() => {
      window.postMessage("hello");
    }}
  >
    content
  </button>
);

export default content;
