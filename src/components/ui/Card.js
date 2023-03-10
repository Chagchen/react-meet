import classes from "./Card.module.css";
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
