import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "./PageComp.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const apiHandler = new APIHandler();

const BarComp = props => {
  const [barState, setBarState] = useState([]);

  useEffect(() => {
    const fetchBarInfos = async () => {
      const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/bars`);
      setBarState(dbRes.data);
    };
    fetchBarInfos();
  }, [props.pageId]);

  const getAddAddress = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

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
        <Link to={getAddAddress(props.pageName, props.pageId)}>
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
