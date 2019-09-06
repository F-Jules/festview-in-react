import React from "react";
import classes from "../../App.css";
import Loader from "react-loader-spinner";

const LoadingComp = () => {
  return (
    <div className={classes.loadDiv}>
      <div className={classes.loadContent}>
        <h1>CHARGEMENT</h1>
        <Loader type="Oval" color="#2eaed5" height="100" width="100" />
      </div>
    </div>
  );
};

export default LoadingComp;
