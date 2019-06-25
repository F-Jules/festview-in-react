import React, { Component } from "react";
import InputFrom from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import classes from "../form.css";

class Login extends Component {
  state = {};

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <div className={classes.form}>
        <form action="post">
          <InputFrom text="Email" type="text" name="email" />
          <InputFrom text="Mot de passe" type="password" name="password" />
          <Button text="Me Connecter" />
        </form>
      </div>
    );
  }
}

export default Login;
