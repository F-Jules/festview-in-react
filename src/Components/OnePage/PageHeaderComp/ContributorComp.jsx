import React from "react";
import classes from "./ContributorComp.css";

function uniqueArray(a) {
  return [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
}

const Contributor = props => {
  const uniqueEditors = uniqueArray(props.editorsInfos);
  return (
    <div className={classes.creatorHeader}>
      <h3>Createur:</h3>
      <div className={classes.creatorInfos}>
        <img
          alt={props.creatorInfos.profile_picture_alt}
          src={`https://s3.eu-west-3.amazonaws.com/festview/${
            props.creatorInfos.profile_picture_file
          }`}
        />
        <h5>{props.creatorInfos.slug}</h5>
        <p>{props.creatorInfos.points}</p>
      </div>
      {uniqueEditors.length > 0 ? (
        <div>
          <h3>Designers:</h3>
          {uniqueEditors.map(oneEditor => {
            return (
              <div key={oneEditor.slug} className={classes.creatorInfos}>
                <img
                  alt={oneEditor.profile_picture_alt}
                  src={`https://s3.eu-west-3.amazonaws.com/festview/${
                    oneEditor.profile_picture_file
                  }`}
                />
                <h5>{oneEditor.slug}</h5>
                <p>{oneEditor.points}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Contributor;
