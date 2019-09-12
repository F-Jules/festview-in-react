import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const VideoModule = props => {
  // Ajouter une vidéo
  const addVideo = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module Vidéos est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de videoState, Cela veut dire que rien na été ajouté comme vidéo pour cet artiste ou ce festival
  if (props.videosInfos.length === 0) {
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
        <Link to={addVideo(props.pageName, props.pageId)}>
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
                <Link to={addVideo(props.pageName, props.pageId)}>
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

export default VideoModule;
