import React from "react";
import classes from "./AllPages.css";
import OneItemComposant from "../OneItemComposant/OneItemComposant";
import LoadingComp from "../../../Components/Extras/LoadingComp";

// Fonction pour récupérer le "titre" de la plage (Artiste ou Festival) et ne garder que les informations relativent a son titre.
const getTitle = props => {
  const dataArray = props.dataList.filter(
    oneArtist =>
      oneArtist.title ===
      props.match.path.slice(4, props.match.path.length - 1).toLowerCase()
  );
  const customTitle = props.match.path.slice(4);
  return [dataArray, customTitle];
};

const AllPages = props => {
  // SI PAS D'INFOS CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
  if (props.dataList.length === 0 || !props.dataList) return <LoadingComp />;
  return (
    <div className={classes.mainDiv}>
      <h3>{getTitle(props)[1]}</h3>
      <ul>
        {/* ON MAP AUTOUR DE CHAQUE INFOS (CHAQUE ARTISTE OU CHAQUE FESTIVAL ET ON PASSE LES INFOS RELATIVENT) */}
        {getTitle(props)[0].map(oneData => {
          return (
            <OneItemComposant
              key={oneData.slug}
              name={oneData.name}
              pseudo={oneData.pseudo}
              id={oneData.id}
              image={oneData.profile_picture_file}
              imageAlt={oneData.profile_picture_alt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AllPages;
