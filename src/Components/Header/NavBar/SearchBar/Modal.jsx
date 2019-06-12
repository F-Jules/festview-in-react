import React from "react";
import classes from "./Modal.css";
import SearchBar from "./SearchBar";

const Modal = props => {
  let styles = { display: "none" };
  if (props.getStateSearch) {
    styles = {
      display: "flex"
    };
  }
  return (
    <div style={styles} className={classes.modalStyle}>
      <button onClick={props.getSearchBar} className={classes.closeButton}>
        x
      </button>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Modal;
