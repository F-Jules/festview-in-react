import React from "react";
import classes from "./OnePageHeader.css";
import plusIcon from "../../../Assets/images/icon-plus.png";

const OnePageHeader = props => {
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
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
      <div className={classes.bgc} style={noShow}>
        {/* <a> */}
        <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        {/* </a> */}
      </div>
    </div>
  );
};

export default OnePageHeader;
