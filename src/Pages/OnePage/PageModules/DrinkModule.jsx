import React from "react";
import classes from "./PageModule.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const DrinkModule = props => {
  // Ajouter un bar.
  const addBar = (pageName, id) => {
    return `/add/bar/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module bar est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de BarState, Cela veut dire que rien na été ajouté pour en infos bar pour ce festival
  if (props.drinksInfos.length === 0) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore d'infos sur le bar et ses boissons.</h2>
      </div>
    );
  }

  return (
    <div className={classes.pageComp}>
      <h2>Bars</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={addBar(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {props.drinksInfos.map((oneDrink, index) => {
          return (
            <div key={index}>
              <li>
                <a href={oneDrink.url}>
                  <p>{oneDrink.category}</p>
                </a>
              </li>
              <li style={noShow}>
                {/* <a> */}
                <img
                  className={classes.custIcon}
                  src={moreIcon}
                  alt="modify icon"
                />
                {/* </a> */}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DrinkModule;
