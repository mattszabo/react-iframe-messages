import React, { Fragment } from "react";
import IFrame from "./IFrame";
import Button from "../Button";
import "./Frame.css";

const Frame = ({ className }) => (
  <IFrame className={className}>
    <Fragment>
      <header>I live in an iFrame</header>
      <Button label="send to parent" />
      <p>Text</p>
    </Fragment>
  </IFrame>
);

export default Frame;
