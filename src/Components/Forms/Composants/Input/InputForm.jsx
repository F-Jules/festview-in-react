import React from "react";
import classes from "./input.css";

const InputForm = props => {
  return (
    <React.Fragment>
      <label className={classes.label}>{props.text}</label>
      <input
        className={classes.input}
        type={props.type}
        name={props.name}
        value={props.value}
      />
    </React.Fragment>
  );
};

export default InputForm;
