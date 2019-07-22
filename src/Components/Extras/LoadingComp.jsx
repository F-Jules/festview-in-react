import React from "react";
import LoadingImg from "../../Assets/Pictos/loading.svg";
import classes from "../../App.css";

const LoadingComp = () => {
  return (
    <div className={classes.loadDiv}>
      <h1>CHARGEMENT</h1>
      <img className={classes.Loading} src={LoadingImg} alt="loading-img" />
    </div>
  );
};

export default LoadingComp;
