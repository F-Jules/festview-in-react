import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import InputForm from "../Composants/Input/InputForm";
import SelectForm from "../Composants/Input/SelectForm";
import classes from "../form.css";
import Button from "../Composants/Buttons/Button";
import NewPageTitle from "../Composants/TitleForm/NewPageTitle";

const apiHandler = new APIHandler();

const CreateForm = props => {
  const [dataToSend, setDataToSend] = useState({});

  const getEntity = res => {
    return res.data.entityName.toLowerCase() + "s";
  };

  const handlePost = async evt => {
    evt.preventDefault();
    try {
      const dbRes = await apiHandler.post("/api/artists", dataToSend);
      console.log(dbRes);
      props.history.replace(
        `/details/${getEntity(dbRes)}/${dbRes.data.name}/${dbRes.data.id}`
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleInput = evt => {
    setDataToSend({ ...dataToSend, [evt.target.name]: evt.target.value });
  };

  return props.match.path === "/create/artist" ? (
    <div>
      <NewPageTitle name="Artist" />
      <form
        className={classes.form}
        onSubmit={handlePost}
        onChange={handleInput}
      >
        <InputForm text={"John de l'Artiste*"} type="text" name="name" />
        <SelectForm
          text="Sélectionnez*"
          type="submit"
          name="category"
          option={["Selectionner:", "artist", "band"]}
          display={["Artist solo", "Groupe"]}
        />
        <InputForm
          text={"Url de la photo de profil"}
          type="url"
          name="profilePictureUrl"
        />
        <Button text="Créer" />
      </form>
    </div>
  ) : (
    <div>
      <NewPageTitle name="Festival" />
      <form action="post" className={classes.form}>
        <InputForm text="Nom du festival*" type="text" name="name" />
        <InputForm text="Date de début*" type="date" name="startingDate" />
        <InputForm text="Date de fin*" type="date" name="endingDate" />
        <InputForm text="Url de la photo de profil" type="url" name="pic" />
        <Button text="Créer" />
      </form>
    </div>
  );
};

export default CreateForm;
