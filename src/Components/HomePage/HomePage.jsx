import React from "react";
import classes from "./HomePage.css";

const HomePage = () => {
  return (
    <div className={classes.mainDiv}>
      <div>
        <h1>
          FestView est une encyclopédie musicale participative <br />
          Contribuez aux pages de vos <a href="/">artistes</a> et{" "}
          <a href="/">festivals</a> préférés
        </h1>
      </div>
      <div>
        <p>Dive into the fest</p>
      </div>
      <div className={classes.createButtonDiv}>
        <a href="/">Créer une page artiste</a>
        <a href="/">Créer une page festival</a>
      </div>
    </div>
  );
};

export default HomePage;
