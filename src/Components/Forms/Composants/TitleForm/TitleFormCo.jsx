import React from "react";
import classes from "../../form.css";

const TitleFormCo = props => {
  return <h1 className={classes.title}>{props.text}</h1>;
};

export default TitleFormCo;
