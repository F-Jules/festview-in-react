import React, { Component } from "react";
import classes from "../form.css";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import Input from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";

class Signup extends Component {
  state = {};
  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <div className={classes.form}>
        <TitleFormCo text="Créez votre compte" />
        <form action="post">
          <Input
            text="Adresse email*"
            type="email"
            name="email"
            handleInput={this.handleInput}
          />
          <Input
            text="Choisissez un pseudo*"
            type="text"
            name="pseudo"
            handleInput={this.handleInput}
          />
          <Input
            text="Code d'accès FestView Beta*"
            type="text"
            name="?"
            handleInput={this.handleInput}
          />
          <Input
            text="Mot de passe*"
            type="password"
            name="password"
            handleInput={this.handleInput}
          />
          <Input
            text="Confirmez votre mot de passe*"
            type="password"
            name="password"
            handleInput={this.handleInput}
          />
          <Input
            text="Url de la photo de profil"
            type="url"
            name="avatar"
            handleInput={this.handleInput}
          />
        </form>
        <Button text="Créer son compte" />
      </div>
    );
  }
}

export default Signup;
