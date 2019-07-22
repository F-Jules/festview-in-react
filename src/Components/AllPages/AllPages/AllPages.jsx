import React from "react";
import classes from "./AllPages.css";
import AllPageComp from "../AllPagesComp/AllPagesComp";
import LoadingComp from "../../Extras/LoadingComp";

const getTitle = props => {
  const dataArray = props.dataList.filter(
    oneArtist =>
      oneArtist.title ===
      props.match.path.slice(4, props.match.path.length - 1).toLowerCase()
  );
  const customTitle = props.match.path.slice(4);
  return [dataArray, customTitle];
};

const AllPages = props => {
  if (!props.dataList) {
    return <LoadingComp />;
  }
  return (
    <div className={classes.mainDiv}>
      <h3>{getTitle(props)[1]}</h3>
      <ul>
        {getTitle(props)[0].map(oneData => {
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
