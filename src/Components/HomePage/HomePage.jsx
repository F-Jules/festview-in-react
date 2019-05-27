import React from "react";
import classes from "./HomePage.css";

const HomePage = () => {
  return (
    <div className={classes.mainDiv}>
      <div>
        <h1>
          FestView est une encyclopédie musicale participative <br />
          Contribuez aux pages de vos <a>artistes</a> et <a>festivals</a>{" "}
          préférés
        </h1>
      </div>
      <div>
        <p>Dive into the fest</p>
      </div>
      <div>
        <div>
          <a>Créer une page artiste</a>
        </div>
        <div>
          <a>Créer une page festival</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
