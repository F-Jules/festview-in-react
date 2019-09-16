import React, { useState, useEffect } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "./AllPages.css";
import OneItemComposant from "../OneItemComposant/OneItemComposant";
import LoadingComponent from "../../../Components/Extras/LoadingComponent";

const apiHandler = new APIHandler();

const AllPages = props => {
  // Fonction pour récupérer le "titre" de la plage (Artiste ou Festival) et ne garder que les informations relativent a son titre.
  const getEntities = url => {
    let apiCall;
    url.match.url.slice(4).toLowerCase() === "artists"
      ? (apiCall = "artists")
      : (apiCall = "organizers");
    return apiCall;
  };

  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    try {
      const fetchDataFromApi = async () => {
        const dBres = await apiHandler.get(`/api/${getEntities(props)}`);
        setDataState(dBres.data["hydra:member"]);
      };
      fetchDataFromApi();
    } catch (err) {
      console.log(err);
    }
  }, [props]);

  // SI PAS D'INFOS CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
  if (dataState.length === 0 || !dataState) return <LoadingComponent />;
  return (
    <div className={classes.mainDiv}>
      <h3>{getEntities(props)}</h3>
      <ul>
        {/* ON MAP AUTOUR DE CHAQUE INFOS (CHAQUE ARTISTE OU CHAQUE FESTIVAL ET ON PASSE LES INFOS RELATIVENT) */}
        {dataState.map(oneData => {
          return (
            <OneItemComposant
              key={oneData.slug}
              entity={getEntities(props)}
              name={oneData.name}
              slug={oneData.slug}
              id={oneData.id}
              image={oneData.profilePicture}
              imageAlt={oneData.profilePictureAlt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AllPages;
