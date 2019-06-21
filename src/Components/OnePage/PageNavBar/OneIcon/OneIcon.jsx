import React from "react";
import classes from "./OneIcon.css";

const OneIcon = props => {
  return (
    <div>
      <div className={classes.bgc} style={{ backgroundColor: props.bgc }}>
        <a href="/" onClick={props.enableModify}>
          <img className={classes.custIcon} src={props.custIcon} alt="icon" />
        </a>
      </div>
      <div className={classes.title}>
        <strong>{props.text}</strong>
      </div>
    </div>
  );
};

export default OneIcon;
