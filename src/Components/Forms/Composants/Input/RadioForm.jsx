import React from "react";
import classes from "./input.css";
import { ReversedRadioButton, RadioGroup } from "react-radio-buttons";

const RadioForm = props => {
  return (
    <div>
      <label className={classes.label}>{props.text}</label>
      <RadioGroup>
        {props.option.map((oneOption, index) => {
          return (
            <ReversedRadioButton
              onChange={() => props.checkedRadio(oneOption, index)}
              key={index}
              checked={props.checkState === index}
              name={props.name}
              value={oneOption}
              //  checked={index === 0 ? true : void 0}
            >
              {oneOption}
            </ReversedRadioButton>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default RadioForm;
