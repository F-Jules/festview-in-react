import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const apiHandler = new APIHandler();

const NetworkCom = props => {
  const [networkState, setNetworkState] = useState([]);

  useEffect(() => {
    const fetchNetworkInfos = async () => {
      const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/networks`);
      setNetworkState(dbRes.data);
    };
    fetchNetworkInfos();
  }, [props.pageId]);

  const getAddAddress = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  if (!networkState) {
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
        <Link to={getAddAddress(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {networkState.map(oneSN => {
          return (
            <div key={oneSN.id}>
              <li>
                <a href={oneSN.url}>
                  <p>{oneSN.category}</p>
                </a>
              </li>
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

export default NetworkCom;
