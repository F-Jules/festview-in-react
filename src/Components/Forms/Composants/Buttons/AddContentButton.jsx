import React from "react";
import classes from "../../form.css";

const Button = props => {
  return <button className={classes.addButton}>Ajouter un {props.text}</button>;
};

export default Button;
