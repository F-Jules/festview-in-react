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
      <div className={classes.legalDiv}>
        <img src={FestviewBetaImg} alt="fb-logo" />
        <p>Mentions légales - Copyright © 2017 FestView</p>
      </div>
      <div className={classes.followUsDiv}>
        <div>Suivez-nous</div>
        <div className={classes.logoDiv}>
          <img src={FacebookLogo} alt="fb-logo" />
          <img src={SpotifyLogo} alt="spot-logo" />
          <img src={YoutubeLogo} alt="youtube-logo" />
          <img src={TwitterLogo} alt="twitt-logo" />
          <img src={LinkdInLogo} alt="ld-logo" />
          <img src={InstagramLogo} alt="insta-logo" />
          <img src={VeerLogo} alt="veer-logo" />
          <img src={KuulaLogo} alt="kuula-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
