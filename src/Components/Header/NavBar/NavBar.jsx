import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.css";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";
import AuthHandler from "../../../Auth/AuthHandler";
import AuthContext from "../../../Auth/AuthContext";

const NavBar = props => {
  const { isLogged, setLogState } = useContext(AuthContext);

  const logout = () => {
    AuthHandler.logout();
    setLogState(false);
    props.history.push("/login");
  };

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
          {isLogged ? (
            <p onClick={logout}>SE DECONNECTER</p>
          ) : (
            <p>
              <Link to="/login">SE CONNECTER</Link>
            </p>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
