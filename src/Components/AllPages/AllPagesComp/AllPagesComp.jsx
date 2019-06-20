import React from "react";
import { Link } from "react-router-dom";

function getPageAdress(page, id) {
  return `/${page}/${id}`;
}

const OnePageComp = props => {
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

export default OnePageComp;
