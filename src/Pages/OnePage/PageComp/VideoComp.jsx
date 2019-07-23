import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const apiHandler = new APIHandler();

const VideoComp = props => {
  const [videoState, setVideoState] = useState([]);

  useEffect(() => {
    const fetchVideoInfos = async () => {
      const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/videos`);
      setVideoState(dbRes.data);
    };
    fetchVideoInfos();
  }, [props.pageId]);

  const getAddAddress = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  if (!videoState) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore de Vidéos</h2>
      </div>
    );
  }

  return (
    <div className={classes.pageComp}>
      <h2>Videos</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={getAddAddress(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {videoState.map(oneVideo => {
          return (
            <div key={oneVideo.id}>
              <iframe
                src={oneVideo.video_embedded_url}
                frameBorder="10"
                title="video"
              />
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

export default VideoComp;