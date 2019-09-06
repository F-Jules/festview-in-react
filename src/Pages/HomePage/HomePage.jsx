import React from "react";
import classes from "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={classes.mainDiv}>
      <div>
        <h1>
          FestView est une encyclopédie musicale participative <br />
          Contribuez aux pages de vos <Link to="/AllArtists">
            artistes
          </Link> et <Link to="/AllFestivals">festivals</Link> préférés
        </h1>
      </div>
      <div>
        <Link to={`/loading`}>
          <p>Dive into the fest</p>
        </Link>
      </div>
      <div className={classes.createButtonDiv}>
        <Link to={`/create/artist`}>
          <h4 className="createButton">Créer une page artiste</h4>
        </Link>
        <Link to={`/create/festival`}>
          <h4 className="createButton ">Créer une page festival</h4>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
