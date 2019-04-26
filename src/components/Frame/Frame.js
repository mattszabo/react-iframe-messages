import React, { Fragment, useState } from "react";
import IFrame from "./IFrame";
import Button from "../Button";
import "./Frame.css";

const Frame = ({ ...props }) => {
  const [text, setText] = useState("no message");
  const textHandler = newText => {
    setText(newText);
  };
  return (
    <IFrame {...props} textHandler={textHandler}>
      <Fragment>
        <header>I live in an iFrame</header>
        <Button label="send to parent" />
        <p>{text}</p>
      </Fragment>
    </IFrame>
  );
};

export default Frame;
