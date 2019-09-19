import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import InputForm from "../Composants/Input/InputForm";
import SelectForm from "../Composants/Input/SelectForm";
import classes from "../form.css";
import TitleForm from "../Composants/TitleForm/TitleForm";
import Button from "../Composants/Buttons/Button";
import Axios from "axios";

const apiHanlder = new APIHandler();

const PageHeaderForm = props => {
  const [dataToModify, setDataToModify] = useState({
    name: props.location.state.name,
    profilePicture: props.location.state.picture
  });

  const getEntity = infos => {
    if (infos === "Artist") return "artists";
    return "organizers";
  };

  const handlePost = async evt => {
    console.log(dataToModify);
    evt.preventDefault();
    try {
      const dbRes = await Axios.put(
        `https://localhost:8443/api/${getEntity(props.location.state.entity)}/${
          props.match.params.id
        }`,
        dataToModify
      );
      console.log(dbRes);
      props.history.replace(
        `/details/${getEntity(dbRes.data.entityName)}/${dbRes.data.slug}/${
          dbRes.data.id
        }`
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleInput = evt => {
    evt.preventDefault();
    setDataToModify({ ...dataToModify, [evt.target.name]: evt.target.value });
  };

  // const splitDate = oneDate => {
  //   const formated = oneDate.split("T");
  //   return formated[0]
  //     .split("-")
  //     .reverse()
  //     .join("-");
  // };

  return props.location.state.entity === "Artist" ? (
    <div>
      <TitleForm name={props.location.state.name} />
      <form
        onSubmit={handlePost}
        className={classes.form}
        onChange={handleInput}
      >
        <InputForm
          text={"Nom de l'Artiste*"}
          type="text"
          name="name"
          value={dataToModify.name}
        />
        <SelectForm
          text="Sélectionnez*"
          type="submit"
          name="category"
          option={["-- Please, select one: --", "artist", "band"]}
        />
        <InputForm
          text={"Url de la photo de profil"}
          type="url"
          name="profilePicture"
          value={dataToModify.profilePicture}
        />
        <Button text="Valider les modifications" />
      </form>
    </div>
  ) : (
    <div>
      <TitleForm name={props.location.state.name} />
      <form action="post" className={classes.form}>
        <InputForm
          text="Nom du festival*"
          type="text"
          name="name"
          value={dataToModify.name}
          handleInput={handleInput}
        />
        {/* <InputForm
          text="Date de début*"
          type="date"
          name={startingDate}
          value={splitDate(startingDate)}
          handleInput={handleInput}
        />
        <InputForm
          text="Date de fin*"
          type="date"
          name={endingDate}
          value={splitDate(endingDate)}
          handleInput={handleInput}
        /> */}
        <InputForm
          text="Url de la photo de profil"
          type="url"
          name="pic"
          value={dataToModify.profilePicture}
          handleInput={handleInput}
        />
        <Button text="Valider les modifications" />
      </form>
    </div>
  );
};

export default PageHeaderForm;
