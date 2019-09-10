import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

// Nouvelle instance de la classe APIHandler
const apiHandler = new APIHandler();

const ProgComp = props => {
  const [progState, setProgState] = useState([]);

  //On Fetch les infos Programmation de cet artist ou ce festival
  useEffect(() => {
    try {
      const fetchProgInfos = async () => {
        const dbRes = await apiHandler.get(
          `/api/pages/${props.pageId}/programs`
        );
        setProgState(dbRes.data);
      };
      fetchProgInfos();
    } catch (err) {
      console.log(err);
    }
  }, [props.pageId]);

  // Ajouter une programmation
  const addProgr = (pageName, id) => {
    return `/add/prog/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module Progr est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de progState, Cela veut dire que rien na été ajouté comme Programmation pour cet artiste ou ce festival
  if (!progState) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore de programmation prévue ou renseignée</h2>
      </div>
    );
  }

  return (
    <div className={classes.pageComp}>
      <h2>Programmation</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={addProgr(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {progState.map(oneProgram => {
          return (
            <div key={oneProgram.id}>
              <li>{oneProgram.featured_program_page_name}</li>
              <li style={noShow}>
                <Link to={getAddAddress(props.pageName, props.pageId)}>
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

export default ProgComp;
