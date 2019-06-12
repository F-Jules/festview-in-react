import React from "react";
import { Link } from "react-router-dom";

function getArtistAdress(artist, id) {
  return `/oneArtist/${artist}/${id}`;
}

const ArtistComp = props => {
  return (
    <li>
      <Link to={getArtistAdress(props.artistPseudo, props.artistId)}>
        {props.artistName}
      </Link>
    </li>
  );
};

export default ArtistComp;
