import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "./PageComp.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

// Nouvelle instance de la classe APIHandler
const apiHandler = new APIHandler();

const BarComp = props => {
  const [barState, setBarState] = useState([]);

  //On Fetch les infos du bar de CE festival
  useEffect(() => {
    try {
      const fetchBarInfos = async () => {
        const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/bars`);
        setBarState(dbRes.data);
      };
      fetchBarInfos();
    } catch (err) {
      console.log("BAR INFOS ERROR", err);
    }
  }, [props.pageId]);

  // Ajouter un bar.
  const addBar = (pageName, id) => {
    return `/add/bar/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module bar est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de BarState, Cela veut dire que rien na été ajouté pour en infos bar pour ce festival
  if (!barState) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore d'infos réseaux sociaux.</h2>
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
        {barState.map(oneDrink => {
          return (
            <div key={oneDrink.id}>
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

export default BarComp;
