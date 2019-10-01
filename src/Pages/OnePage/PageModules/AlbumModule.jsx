import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageModule.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const AlbumModule = props => {
  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module album est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };
  return (
    <div className={classes.pageComp}>
      <h2>Albums</h2>
      <div className={classes.bgc} style={noShow}>
        <Link
          to={{
            pathname: `/add/album/${props.pageSlug}`,
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
        {props.albumInfos.map(oneAlbum => {
          return (
            <div key={oneAlbum.name}>
              <li>
                <img src={oneAlbum.coverImage} alt={oneAlbum.coverImageAlt} />
              </li>
              <li>{oneAlbum.name}</li>
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

export default AlbumModule;
