import React, { Fragment } from "react";
import Button from "../Button";
import "./Panel.css";

const Panel = ({ className }) => (
  <div className={className}>
    <Fragment>
      <header>I live in the parent window</header>
      <Button label="send to iFrame" />
      <p>Text</p>
    </Fragment>
  </div>
);

export default Panel;
