import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.css";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";
import Modal from "./SearchBar/Modal";

class NavBar extends Component {
  state = {
    showSearch: false
  };

  getSearchBar = evt => {
    evt.preventDefault();
    this.setState({
      showSearch: !this.state.showSearch
    });
  };

  render() {
    const { showSearch } = this.state;
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
            <p onClick={this.getSearchBar}>RECHERCHER</p>
            <p>
              <Link to="/login">SE CONNECTER</Link>
            </p>
          </div>
        </nav>
        <Modal
          getStateSearch={showSearch}
          getSearchBar={this.getSearchBar}
          dataList={this.props.dataList}
        />
      </React.Fragment>
    );
  }
}

export default NavBar;
