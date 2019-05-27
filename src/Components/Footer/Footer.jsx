import React from "react";
import classes from "./Footer.css";
import FestviewBetaImg from "../../Assets/images/festview_inline.png.png";
import FacebookLogo from "../../Assets/images/logo-facebook.png";
import SpotifyLogo from "../../Assets/images/logo-spotify.png";
import TwitterLogo from "../../Assets/images/logo-twitter.png";
import YoutubeLogo from "../../Assets/images/logo-youtube.png";
import LinkdInLogo from "../../Assets/images/logo-linkedin.png";
import InstagramLogo from "../../Assets/images/logo-instagram.png";
import VeerLogo from "../../Assets/images/logo-veer.png";
import KuulaLogo from "../../Assets/images/logo-kuula.png";

const Footer = () => {
  return (
    <footer className={classes.mainDiv}>
      <div>
        <img src={FestviewBetaImg} />
        <p>Mentions légales - Copyright © 2017 FestView</p>
      </div>
      <div className={classes.followUsDiv}>
        <div>Suivez-nous</div>
        <div className={classes.logoDiv}>
          <img src={FacebookLogo} />
          <img src={SpotifyLogo} />
          <img src={YoutubeLogo} />
          <img src={TwitterLogo} />
          <img src={LinkdInLogo} />
          <img src={InstagramLogo} />
          <img src={VeerLogo} />
          <img src={KuulaLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
