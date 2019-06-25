import React from "react";
import classes from "../../form.css";

const Button = props => {
  return <button className={classes.Button}>{props.text}</button>;
};

export default Button;
