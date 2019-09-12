import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const AlbumModule = props => {
  // Ajouter un album
  const addAlbum = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module album est en display none
  let noShow;
  if (!props.albumInfos) noShow = { display: "none" };

  // SI pas de musicState, Cela veut dire que rien na été ajouté comme album pour cet artiste
  if (props.albumInfos.length === 0) {
    return (
      <div className={classes.pageComp}>
        <h2>Pas encore d'infos réseaux sociaux.</h2>
      </div>
    );
  }

  return (
    <div className={classes.pageComp}>
      <h2>Musique</h2>
      <div className={classes.bgc} style={noShow}>
        <Link to={addAlbum(props.pageName, props.pageId)}>
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
        </Link>
      </div>
      <ul>
        {props.albumInfos.map(oneAlbum => {
          return (
            <div key={oneAlbum.name}>
              <li>
                <img src={oneAlbum.coverImage} alt={oneAlbum.coverImageAlt} />
              </li>
              <li>{oneAlbum.name}</li>
              <li style={noShow}>
                <Link to={addAlbum(props.pageName, props.pageId)}>
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

export default AlbumModule;
