import React from "react";
import classes from "./input.css";

const InputForm = props => {
  return (
    <React.Fragment>
      <label className={classes.label}>{props.text}</label>
      <select
        className={classes.input}
        type={props.type}
        name={props.name}
        onChange={props.handleInput}
      >
        <option value="dog">{props.option[0]}</option>
        <option value="cat">{props.option[1]}</option>
        />
      </select>
    </React.Fragment>
  );
};

export default InputForm;