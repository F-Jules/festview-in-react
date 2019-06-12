import React from "react";
import classes from "./OnePageHeader.css";

const ArtistHeader = props => {
  function dateDisplay(start, end) {
    const dayS = start
      .split("")
      .splice(0, 10)
      .join("")
      .split("-");
    const dayE = end
      .split("")
      .splice(0, 10)
      .join("")
      .split("-");
    const monthArr = [
      null,
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ];
    const date = `${dayS[2]} au ${dayE[2]} ${monthArr[dayS[1].split("")[1]]} ${
      dayS[0]
    }`;
    return date;
  }
  return props.isArtist ? (
    <div className={classes.onePageHeader}>
      <img
        alt={props.artistInfos.name}
        src={`https://s3.eu-west-3.amazonaws.com/festview/${
          props.artistImage.file
        }`}
      />
      <h1>{props.artistInfos.name}</h1>
      <h3>@{props.artistInfos.pseudo}</h3>
    </div>
  ) : (
    <div className={classes.onePageHeader}>
      <img
        alt={props.festivalInfos.name}
        src={`https://s3.eu-west-3.amazonaws.com/festview/${
          props.festivalImage.file
        }`}
      />
      <h1>{props.festivalInfos.name}</h1>
      <h3>@{props.festivalInfos.pseudo}</h3>
      <h3>{dateDisplay(props.festivalStartDate, props.festivalEndDate)}</h3>
    </div>
  );
};

export default ArtistHeader;
