import React from "react";
import { Link } from "react-router-dom";

function getArtistAdress(artist) {
  return `/oneArtist/${artist}`;
}

const ArtistComp = props => {
  return (
    <li>
      <Link to={getArtistAdress(props.artistSlug)}>{props.artistName}</Link>
    </li>
  );
};

export default ArtistComp;
