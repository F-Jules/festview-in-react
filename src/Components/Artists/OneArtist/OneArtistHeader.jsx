import React from "react";
import classes from "./OneArtist.css";

const ArtistHeader = props => {
  return (
    <div className={classes.artistHeader}>
      <img
        alt={props.artistInfos.name}
        src={`https://s3.eu-west-3.amazonaws.com/festview/${
          props.artistImage.file
        }`}
      />
      <h1>{props.artistInfos.name}</h1>
      <h3>@{props.artistInfos.pseudo}</h3>
    </div>
  );
};

export default ArtistHeader;
