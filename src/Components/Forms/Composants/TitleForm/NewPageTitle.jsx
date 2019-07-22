import React from "react";
import classes from "../../form.css";

const NewPageTitle = props => {
  return <h1 className={classes.title}>Création d'une page {props.name}</h1>;
};

export default NewPageTitle;
