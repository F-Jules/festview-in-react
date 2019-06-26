import React from "react";
import classes from "../../form.css";

const CancelButton = props => {
  return (
    <button className={classes.deleteButton} onClick={props.removeForm}>
      X
    </button>
  );
};

export default CancelButton;
