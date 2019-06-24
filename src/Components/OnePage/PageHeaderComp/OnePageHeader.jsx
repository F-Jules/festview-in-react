import React from "react";
import classes from "./OnePageHeader.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";

function getPageAdress(type, page, id) {
  return `/edit/${type}/${page}/${id}`;
}

const OnePageHeader = props => {
  console.log(props.pageInfos);
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
        <Link
          to={getPageAdress(
            props.pageInfos.title,
            props.pageInfos.pseudo,
            props.pageInfos.id
          )}
        >
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
    </div>
  );
};

export default OnePageHeader;
