import React, { Component } from "react";
import classes from "./NavBar.css";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";
import SearchBar from "./SearchBar/SearchBar";

class NavBar extends Component {
  state = {
    showSearch: false
  };

  getSearchBar = () => {
    this.setState({
      showSearch: true
    });
  };

  render() {
    const { showSearch } = this.state;
    return (
      <React.Fragment>
        <nav className={classes.mainDiv}>
          <div className={classes.imageDiv}>
            <img src={FestviewBetaImg} alt="festview" />
          </div>
          <div className={classes.listDiv}>
            <p>AIDE</p>
            <p>FESTVALS</p>
            <p>ARTISTES</p>
            <p onClick={this.getSearchBar}>RECHERCHER</p>
            <p>
              <a href="/">SE CONNECTER</a>
            </p>
          </div>
        </nav>
        <SearchBar showSearch={showSearch} />
      </React.Fragment>
    );
  }
}

export default NavBar;
