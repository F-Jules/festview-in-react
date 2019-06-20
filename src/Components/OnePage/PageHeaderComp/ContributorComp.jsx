import React from "react";
import classes from "./ContributorComp.css";

const Contributor = props => {
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
      {props.editorsInfos.length > 0 ? (
        <div>
          <h3>Designers:</h3>
          {props.editorsInfos.map(oneEditor => {
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
