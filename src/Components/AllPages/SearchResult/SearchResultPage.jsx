import React from "react";
import AllPageComp from "../AllPagesComp/AllPagesComp";
import classes from "../AllPagesComp/AllPageComp.css";

const SearchResult = props => {
  var resArray = [];
  console.log(props);
  if (!props.dataList) return <div className={classes.mainDiv} />;
  resArray = props.dataList.filter(oneElement => {
    return oneElement.pseudo.includes(props.match.params.search);
  });
  console.log(resArray);
  return resArray.length > 0 ? (
    <div className={classes.mainDiv}>
      <h2>Résultats:</h2>
      <ul>
        {resArray.map(oneArray => {
          return (
            <AllPageComp
              key={oneArray.slug}
              name={oneArray.name}
              pseudo={oneArray.pseudo}
              image={oneArray.profile_picture_file}
              imageAlt={oneArray.profile_picture_alt}
              id={oneArray.id}
            />
          );
        })}
      </ul>
    </div>
  ) : (
    <p className={classes.mainDiv}>
      Oups, rien ne correspond a ta recherche...
    </p>
  );
};

export default SearchResult;
