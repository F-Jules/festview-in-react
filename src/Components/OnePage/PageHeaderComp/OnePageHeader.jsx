import React from "react";
import classes from "./OnePageHeader.css";

const OnePageHeader = props => {
  return (
    <div className={classes.onePageHeader}>
      <img
        alt={props.pageInfos.profile_picture_alt}
        src={`https://s3.eu-west-3.amazonaws.com/festview/${
          props.pageInfos.profile_picture_file
        }`}
      />
      <h1>{props.pageInfos.name}</h1>
      <h3>@{props.pageInfos.pseudo}</h3>
    </div>
  );
};

export default OnePageHeader;
