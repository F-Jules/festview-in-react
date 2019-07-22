import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import InputForm from "../Composants/Input/InputForm";
import SelectForm from "../Composants/Input/SelectForm";
import classes from "../form.css";
import Button from "../Composants/Buttons/Button";
import NewPageTitle from "../Composants/TitleForm/NewPageTitle";

const apiHandler = new APIHandler();

class CreateForm extends Component {
  state = { name: "", category: "", pic: "", startingDate: "", endingDate: "" };

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  splitDate = oneDate => {
    const formated = oneDate.split("T");
    return formated[0]
      .split("-")
      .reverse()
      .join("-");
  };

  render() {
    return this.props.match.path === "/create/artist" ? (
      <div>
        <NewPageTitle name="Artist" />
        <form className={classes.form} onChange={this.handleInput}>
          <InputForm text={"Nom de l'Artiste*"} type="text" name="name" />
          <SelectForm
            text="Sélectionnez*"
            type="submit"
            option={["artist", "band"]}
            display={["Artist solo", "Groupe"]}
          />
          <InputForm text={"Url de la photo de profil"} type="url" name="pic" />
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
  }
}

export default CreateForm;
