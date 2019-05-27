import React from "react";

const SearchBar = props => {
  let styles = { display: "none" };
  if (props.showSearch) {
    styles = { display: "block", zIndex: 100, height: 0 };
  }
  return (
    <div style={styles}>
      <h2>RECHERCHER</h2>
      <form>
        <input size="60" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
