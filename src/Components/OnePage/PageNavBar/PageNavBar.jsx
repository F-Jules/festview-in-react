import React from "react";
import classes from "./PageNavBar.css";
import OneIcon from "./OneIcon/OneIcon";
import plusIcon from "../../../Assets/images/icon-plus.png";
import progIcon from "../../../Assets/images/icon-program.png";
import musicIcon from "../../../Assets/images/icon-music.png";
import barIcon from "../../../Assets/images/icon-bar.png";
import videoIcon from "../../../Assets/images/icon-video.png";
import snIcon from "../../../Assets/images/icon-network.png";

const PageNavBar = props => {
  return (
    <div className={classes.mainDiv}>
      <OneIcon custIcon={plusIcon} text={"Modifier"} bgc={"#5466b8"} />
      <OneIcon custIcon={progIcon} text={"Programmation"} bgc={"#3930aa"} />
      {props.pageType === "artist" ? (
        <OneIcon custIcon={musicIcon} text={"Musique"} bgc={"#f0248e"} />
      ) : (
        <OneIcon custIcon={barIcon} text={"Bar"} bgc={"#dba200"} />
      )}
      <OneIcon custIcon={videoIcon} text={"Vidéos"} bgc={"#f0243f"} />
      <OneIcon custIcon={snIcon} text={"Réseaux sociaux"} bgc={"#5cdb95"} />
    </div>
  );
};

export default PageNavBar;
