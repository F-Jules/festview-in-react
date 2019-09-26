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
        value={props.value}
      >
        {props.option.map((oneOption, index) => (
          <option key={index} value={oneOption}>
            {props.display[index]}
          </option>
        ))}
        />
      </select>
    </React.Fragment>
  );
};

export default InputForm;
