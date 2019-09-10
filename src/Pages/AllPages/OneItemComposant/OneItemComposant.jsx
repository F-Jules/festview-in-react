import React from "react";
import { Link } from "react-router-dom";

// Fonction générique pour récupérer l'adresse d'une page et s'y rendre depuis un OneItemComposant (depuis la page AllArtists, AllFestivals ou Search)
function getPageAdress(page, id) {
  return `/details/${page}/${id}`;
}

const OneItemComposant = props => {
  return (
    <li>
      <Link to={getPageAdress(props.pseudo, props.id)}>
        <div>
          <img
            alt={props.imageAlt}
            src={`https://s3.eu-west-3.amazonaws.com/festview/${props.image}`}
          />
          <h4>{props.name}</h4>
        </div>
      </Link>
    </li>
  );
};

export default OneItemComposant;
