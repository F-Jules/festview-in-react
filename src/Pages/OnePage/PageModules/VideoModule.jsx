import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const VideoModule = props => {
  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module Vidéos est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
  console.log(props.videosInfos);
  return (
    <div className={classes.pageComp}>
      <h2>Videos</h2>
      <div className={classes.bgc} style={noShow}>
        <Link
          to={{
            pathname: `/add/video/${props.pageSlug}`,
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
        {props.videosInfos.map(oneVideo => {
          return (
            <div key={oneVideo.embeddedUrl}>
              <iframe
                src={oneVideo.embeddedUrl}
                frameBorder="10"
                title="video"
              />
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

export default VideoModule;
