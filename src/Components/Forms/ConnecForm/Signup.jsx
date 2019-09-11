import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import Input from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";

const apiHandler = new APIHandler();

class Signup extends Component {
  state = {
    email: "",
    pseudo: "",
    password: "",
    confirmedPassword: "",
    betaPassword: "ArnoldLayne"
  };

  handlePost = evt => {
    evt.preventDefault();
    console.log(this.state);
  };

  handleInput = evt => {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className={classes.form}>
        <TitleFormCo text="Créez votre compte" />
        <form onSubmit={this.handlePost} onChange={this.handleInput}>
          <Input text="Adresse email*" type="email" name="email" />
          <Input text="Choisissez un pseudo*" type="text" name="pseudo" />
          <Input
            text="Code d'accès FestView Beta*"
            type="text"
            name="betaPassword"
          />
          <Input text="Mot de passe*" type="password" name="password" />
          <Input
            text="Confirmez votre mot de passe*"
            type="password"
            name="confirmedPassword"
          />
          {/* <Input
            text="Url de la photo de profil"
            type="url"
            name="avatar"
          /> */}
        </form>
        <Button text="Créer son compte" />
      </div>
    );
  }
}

export default Signup;
