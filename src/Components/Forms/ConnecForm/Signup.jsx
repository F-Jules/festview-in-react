import React, { Component } from "react";
import classes from "../form.css";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import Input from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import FeedBack from "./FeedBack";
import AuthHandler from "../../../Auth/AuthHandler";

class Signup extends Component {
  state = {
    betaPassword: "ArnoldLayne",
    msg: ""
  };

  checkConfirmedPassword = () => {
    if (this.state.password === this.state.confirmedPassword) return true;
  };

  handlePost = evt => {
    evt.preventDefault();
    const userInfos = {
      email: this.state.email,
      pseudo: this.state.pseudo,
      password: this.state.password,
      betaPassword: this.state.betaPassword
    };
    if (this.checkConfirmedPassword()) {
      AuthHandler.signup(userInfos)
        .then(dbRes => {
          console.log(dbRes);
          if (dbRes.status === 200 || dbRes.status === 201) {
            this.props.history.push({
              pathname: "/login",
              state: { msg: "Account created succesfully." }
            });
          }
        })
        .catch(dbErr => {
          console.log("YOYO", dbErr.response);
          if (dbErr.response.status === 400 || dbErr.response.status === 500) {
            this.setState({
              msg: dbErr.response.data["hydra:description"].toUpperCase()
            });
          }
        });
    } else
      this.setState({
        msg: "Oups, it seems that your password is not matching."
      });
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
            value={this.state.betaPassword}
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
          <Button text="Créer son compte" />
        </form>
        <FeedBack msg={this.state.msg} />
      </div>
    );
  }
}

export default Signup;
