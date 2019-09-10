import React, { useState, useEffect, useRef } from "react";
import OneItemComposant from "../OneItemComposant/OneItemComposant";
import classes from "../OneItemComposant/OneItemComposant.css";
import inputStyle from "../../../Components/Forms/Composants/Input/input.css";
import LoadingComp from "../../../Components/Extras/LoadingComp";

const SearchResult = props => {
  const inputRef = useRef();
  const [userInput, setUserInput] = useState("");
  const inputChangeHandler = evt => {
    setUserInput(evt.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const filter = data => {
    return data.filter(oneEl => {
      return oneEl.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  // SI PAS D'INFOS CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
  if (props.dataList.length === 0 || !props.dataList) return <LoadingComp />;
  return (
    <div className={classes.mainDiv}>
      <label htmlFor="">
        <h2>Rechercher:</h2>
      </label>
      <input
        className={inputStyle.input}
        type="text"
        name=""
        id=""
        ref={inputRef}
        value={userInput}
        onChange={inputChangeHandler}
      />
      <ul>
        {filter(props.dataList).map((oneArray, index) => {
          return (
            <OneItemComposant
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
