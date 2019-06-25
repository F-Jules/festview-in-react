import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../form.css";
import InputFrom from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import CreateButton from "../Composants/Buttons/CreateAccBut";

class Login extends Component {
  state = {};

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <div className={classes.form}>
        <TitleFormCo text="Connexion" />
        <form action="post">
          <InputFrom text="Email" type="email" name="email" />
          <InputFrom text="Mot de passe" type="password" name="password" />
          <Button text="Me Connecter" />
        </form>
        <Link to="/signup">
          <CreateButton />
        </Link>
      </div>
    );
  }
}

export default Login;
