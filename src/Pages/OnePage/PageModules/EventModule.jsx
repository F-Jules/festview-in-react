import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const EventModule = props => {
  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module Progr est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
  console.log(props.eventsInfos);
  return (
    <div className={classes.pageComp}>
      <h2>Événements</h2>
      <div className={classes.bgc} style={noShow}>
        <Link
          to={{
            pathname: `/add/event/${props.pageSlug}`,
            state: {
              pageId: props.pageId,
              name: props.pageName
            }
          }}
        >
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {props.eventsInfos.map((oneProgram, index) => {
          return (
            <div key={index}>
              <li>Pas de nom dans l'objet event</li>
              <li style={noShow}>
                <img
                  className={classes.custIcon}
                  src={moreIcon}
                  alt="modify icon"
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default EventModule;
