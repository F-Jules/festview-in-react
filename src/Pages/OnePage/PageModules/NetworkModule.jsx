import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const NetworkModule = props => {
  // Ajouter un Social Network
  const addSN = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module SN est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de networkState, Cela veut dire que rien na été ajouté comme SN pour cet artiste ou ce festival
  if (props.networksInfos.length === 0) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore d'infos réseaux sociaux.</h2>
      </div>
    );
  }

  return (
    <div className={classes.pageComp}>
      <h2>Réseaux sociaux</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={addSN(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {props.networksInfos.map((oneSN, index) => {
          return (
            <div key={index}>
              <li>
                <a href={oneSN.url}>
                  <p>{oneSN.category}</p>
                </a>
              </li>
              <li style={noShow}>
                <Link to={addSN(props.pageName, props.pageId)}>
                  <img
                    className={classes.custIcon}
                    src={moreIcon}
                    alt="modify icon"
                  />
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NetworkModule;
