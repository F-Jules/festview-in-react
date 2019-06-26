import React from "react";
import classes from "../../form.css";

const CompTitle = props => {
  return (
    <h1 className={classes.title}>
      {props.name} - Ajouter des {props.text}
    </h1>
  );
};

export default CompTitle;
