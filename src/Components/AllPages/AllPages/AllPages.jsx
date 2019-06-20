import React from "react";
import classes from "./AllPages.css";
import AllPageComp from "../AllPagesComp/AllPagesComp";

const AllPages = props => {
  let dataArray = [];
  let customTitle = "";
  if (!props.dataList) return null;
  if (props.match.path === "/AllArtists") {
    dataArray = props.dataList.filter(
      oneArtist => oneArtist.title === "artist"
    );
    customTitle = "Here is our Artists list:";
  } else if (props.match.path === "/AllFestivals") {
    dataArray = props.dataList.filter(
      oneFestival => oneFestival.title === "festival"
    );
    customTitle = "Here is our Festivals list:";
  }
  console.log(dataArray);
  return (
    <div className={classes.mainDiv}>
      <h3>{customTitle}</h3>
      <ul>
        {dataArray.map(oneData => {
          return (
            <AllPageComp
              key={oneData.slug}
              name={oneData.name}
              pseudo={oneData.pseudo}
              id={oneData.id}
              image={oneData.profile_picture_file}
              imageAlt={oneData.profile_picture_alt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AllPages;
