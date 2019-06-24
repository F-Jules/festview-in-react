import React from "react";
import classes from "../../form.css";

const EditButton = props => {
  return <button className={classes.editButton}>{props.text}</button>;
};

export default EditButton;
