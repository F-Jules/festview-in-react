import React, { useState, useEffect, useRef } from "react";
import APIHandler from "../../../Api/ApiHandler";
import OneItemComposant from "../OneItemComposant/OneItemComposant";
import classes from "../OneItemComposant/OneItemComposant.css";
import inputStyle from "../../../Components/Forms/Composants/Input/input.css";
import LoadingComponent from "../../../Components/Extras/LoadingComponent";

const apiHandlder = new APIHandler();

const SearchResult = props => {
  const inputRef = useRef();

  const [userInput, setUserInput] = useState("");
  const [dataBaseResponse, setDataBaseResponse] = useState([]);

  const inputChangeHandler = evt => {
    setUserInput(evt.target.value);
  };

  const fetchingDataForSearch = async () => {
    const dbRes = await Promise.all([
      apiHandlder.get("/api/artists"),
      apiHandlder.get("/api/organizers")
    ]);
    setDataBaseResponse(
      dbRes[0].data["hydra:member"].concat(dbRes[1].data["hydra:member"])
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    try {
      fetchingDataForSearch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const filter = data => {
    return data.filter(oneEl => {
      return oneEl.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  const addAnS = entityName => {
    return entityName.toLowerCase() + "s";
  };

  // SI PAS D'Infos CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
  if (dataBaseResponse.length === 0 || !dataBaseResponse)
    return <LoadingComponent />;
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
        {filter(dataBaseResponse).map((oneResult, index) => {
          return (
            <OneItemComposant
              key={index}
              name={oneResult.name}
              slug={oneResult.slug}
              image={oneResult.profilePicture}
              imageAlt={oneResult.profilePictureAlt}
              id={oneResult.id}
              entity={addAnS(oneResult.entityName)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
