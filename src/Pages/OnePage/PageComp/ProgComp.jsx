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

  useEffect(() => {
    const fetchProgInfos = async () => {
      const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/programs`);
      setProgState(dbRes.data);
    };
    fetchProgInfos();
  }, [props.pageId]);

  const getAddAddress = (pageName, id) => {
    return `/add/prog/${pageName}/${id}`;
  };

  if (!progState) {
    return (
      <div className={classes.pageComp}>
        <h2>Programmation</h2>
      </div>
    );
  }

  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
  return (
    <div className={classes.pageComp}>
      <h2>Programmation</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={getAddAddress(props.pageName, props.pageId)}>
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
