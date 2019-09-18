import React from "react";
import classes from "./OnePageHeader.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";

function getPageAdress(entity, page, id) {
  return `/edit/${entity}/${page}/${id}`;
}

function splitDate(oneDate) {
  const formated = oneDate.split("T");
  return formated[0]
    .split("-")
    .reverse()
    .join("-");
}

const getEntity = props => {
  return props.pageInfos.entityName.toLowerCase();
};

const OnePageHeader = props => {
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
  return (
    <div className={classes.onePageHeader}>
      <img
        alt={props.pageInfos.profilePictureAlt}
        src={props.pageInfos.profilePicture}
      />
      <h1>{props.pageInfos.name}</h1>
      <h3>@{props.pageInfos.slug}</h3>
      {props.pageInfos.title === "festival" ? (
        <h3>
          {splitDate(props.pageInfos.event_starting_date)} /{" "}
          {splitDate(props.pageInfos.event_ending_date)}
        </h3>
      ) : null}
      <div className={classes.bgc} style={noShow}>
        <Link
          to={{
            pathname: getPageAdress(
              getEntity(props),
              props.pageInfos.slug,
              props.id
            ),
            state: {
              name: props.pageInfos.name,
              entity: props.pageInfos.entityName,
              picture: props.pageInfos.profilePicture
            }
          }}
        >
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
    </div>
  );
};

export default OnePageHeader;
