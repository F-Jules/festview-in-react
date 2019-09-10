import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

// Nouvelle instance de la classe APIHandler
const apiHandler = new APIHandler();

const MusicComp = props => {
  const [musicState, setMusicState] = useState([]);

  //On Fetch les infos musicales de CET artist
  useEffect(() => {
    try {
      const fetchMusicInfos = async () => {
        const dbRes = await apiHandler.get(`/api/pages/${props.pageId}/albums`);
        setMusicState(dbRes.data);
      };
      fetchMusicInfos();
    } catch (err) {
      console.log(err);
    }
  }, [props.pageId]);

  // Ajouter un album
  const addAlbum = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  // Si le bouton modifier la page n'est pas cliqué, le bouton modifier module album est en display none
  let noShow;
  if (!props.modifyState) noShow = { display: "none" };

  // SI pas de musicState, Cela veut dire que rien na été ajouté comme album pour cet artiste
  if (!musicState) {
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
        {musicState.map(oneProgram => {
          return (
            <div key={oneProgram.id}>
              <li>
                <img
                  src={`https://s3.eu-west-3.amazonaws.com/festview/${oneProgram.cover_file}`}
                  alt={oneProgram.cover_alt}
                />
              </li>
              <li>{oneProgram.name}</li>
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

export default MusicComp;
