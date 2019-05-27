import React from "react";
import classes from "./NavBar.css";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";

const NavBar = () => {
  return (
    <nav className={classes.mainDiv}>
      <div className={classes.imageDiv}>
        <img src={FestviewBetaImg} />
      </div>
      <div className={classes.listDiv}>
        <p>Aide</p>
        <p>Festivals</p>
        <p>Artistes</p>
        <p>
          <a>Se connecter</a>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
