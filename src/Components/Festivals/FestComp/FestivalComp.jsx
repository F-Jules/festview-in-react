import React from "react";
import { Link } from "react-router-dom";

function gettingFestivalAdress(festival, id) {
  return `/oneFestival/${festival}/${id}`;
}

const FestivalComp = props => {
  return (
    <li>
      <Link to={gettingFestivalAdress(props.festivalPseudo, props.festivalId)}>
        {props.festivalName}
      </Link>
    </li>
  );
};

export default FestivalComp;
