import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.css";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className={classes.mainDiv}>
        <div className={classes.imageDiv}>
          <Link to="/">
            <img src={FestviewBetaImg} alt="festview" />
          </Link>
        </div>
        <div className={classes.listDiv}>
          <p>AIDE</p>
          <p>
            <Link to="/AllFestivals">FESTIVALS</Link>
          </p>
          <p>
            <Link to="/AllArtists">ARTISTS</Link>
          </p>
          <p>
            <Link to="/search">RECHERCHER</Link>
          </p>
          <p>
            <Link to="/login">SE CONNECTER</Link>
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
