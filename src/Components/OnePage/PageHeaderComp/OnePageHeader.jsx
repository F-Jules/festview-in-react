import React from "react";
import classes from "./OnePageHeader.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";

function getPageAdress(type, page, id) {
  return `/edit/${type}/${page}/${id}`;
}

function splitDate(oneDate) {
  const formated = oneDate.split("T");
  return formated[0]
    .split("-")
    .reverse()
    .join("-");
}

const OnePageHeader = props => {
  const { pageInfos, modifyState } = props;
  let noShow;
  if (!modifyState) noShow = { display: "none" };
  return (
    <div className={classes.onePageHeader}>
      <img
        alt={pageInfos.profile_picture_alt}
        src={`https://s3.eu-west-3.amazonaws.com/festview/${
          pageInfos.profile_picture_file
        }`}
      />
      <h1>{pageInfos.name}</h1>
      <h3>@{pageInfos.pseudo}</h3>
      {pageInfos.title === "festival" ? (
        <h3>
          {splitDate(pageInfos.event_starting_date)} /{" "}
          {splitDate(pageInfos.event_ending_date)}
        </h3>
      ) : null}
      <div className={classes.bgc} style={noShow}>
        <Link
          to={getPageAdress(pageInfos.title, pageInfos.pseudo, pageInfos.id)}
        >
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
    </div>
  );
};

export default OnePageHeader;
