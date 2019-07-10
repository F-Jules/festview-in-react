import React, { useState } from "react";
import AllPageComp from "../AllPagesComp/AllPagesComp";
import classes from "../AllPagesComp/AllPageComp.css";
import inputStyle from "../../Forms/Composants/Input/input.css";

const SearchResult = props => {
  const inputState = useState("");

  const inputChangeHandler = evt => {
    inputState[1](evt.target.value);
  };

  const filter = data => {
    return data.filter(oneEl => {
      return oneEl.name.toLowerCase().includes(inputState[0].toLowerCase());
    });
  };

  if (!props.dataList) return <div className={classes.mainDiv} />;
  return (
    <div className={classes.mainDiv}>
      <label htmlFor="">Rechercher:</label>
      <input
        className={inputStyle.input}
        type="text"
        name=""
        id=""
        value={inputState[0]}
        onChange={inputChangeHandler}
      />
      <ul>
        {filter(props.dataList).map((oneArray, index) => {
          return (
            <AllPageComp
              key={index}
              name={oneArray.name}
              pseudo={oneArray.pseudo}
              image={oneArray.profile_picture_file}
              imageAlt={oneArray.profile_picture_alt}
              id={oneArray.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
