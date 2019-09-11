import React from "react";
import { Link } from "react-router-dom";

// Fonction générique pour récupérer l'adresse d'une page et s'y rendre depuis un OneItemComposant (depuis la page AllArtists, AllFestivals ou Search)
function getPageAdress(entity, page, id) {
  return `/details/${entity}/${page}/${id}`;
}

const OneItemComposant = props => {
  return (
    <li>
      <Link to={getPageAdress(props.entity, props.slug, props.id)}>
        <div>
          <img alt={props.imageAlt} src={props.image} />
          <h4>{props.name}</h4>
        </div>
      </Link>
    </li>
  );
};

export default OneItemComposant;
