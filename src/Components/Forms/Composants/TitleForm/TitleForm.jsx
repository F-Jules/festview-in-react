import React from "react";
import classes from "../../form.css";

const TitleForm = props => {
  return (
    <h1 className={classes.title}>Modification de la page {props.name}</h1>
  );
};

export default TitleForm;
