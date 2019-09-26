import React from "react";
import classes from "./PageModule.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";
import wineIcon from "../../../Assets/images/icon-wine.png";
import beerIcon from "../../../Assets/images/icon-beer.png";
import shooterIcon from "../../../Assets/images/icon-shooter.png";
import cocktailIcon from "../../../Assets/images/icon-cocktail.png";
import softIcon from "../../../Assets/images/icon-soft.png";

const DrinkModule = props => {
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

  const temporaryDrinksIconManger = drink => {
    if (drink === "icon-wine.png" || drink === "wine.png") return wineIcon;
    if (drink === "icon-beer.png" || drink === "beer.png") return beerIcon;
    if (drink === "icon-shooter.png" || drink === "shooter.png")
      return shooterIcon;
    if (drink === "icon-soft.png" || drink === "soft.png") return softIcon;
    if (drink === "icon-cocktail.png" || drink === "cocktail.png")
      return cocktailIcon;
  };

  return (
    <div className={classes.pageComp}>
      <h2>Bars</h2>
      <div className={classes.bgc} style={noShow}>
        <Link
          to={{
            pathname: `/add/drinks/${props.pageSlug}`,
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
        {props.drinksInfos.map((oneDrink, index) => {
          return (
            <div key={index}>
              <li>
                <p>{oneDrink.name}</p>
                <img
                  style={{ width: "3vw" }}
                  src={temporaryDrinksIconManger(oneDrink.coverImage)}
                  alt={oneDrink.coverImageAlt}
                />
                <p>{oneDrink.category}</p>
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
