import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "../form.css";
import InputFrom from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import CreateButton from "../Composants/Buttons/CreateAccBut";
import FeedBack from "./FeedBack";

const ApiHandler = new APIHandler();

class Login extends Component {
  state = {};

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
        <TitleFormCo text="Connexion" />
        <form onSubmit={this.handlePost} onChange={this.handleInput}>
          <InputFrom text="Email" type="email" name="email" />
          <InputFrom text="Mot de passe" type="password" name="password" />
          <Button text="Me Connecter" />
        </form>
        {this.props.location.state === undefined ? (
          <Link to="/signup">
            <CreateButton />
          </Link>
        ) : (
          <FeedBack msg={this.props.location.state.msg} />
        )}
      </div>
    );
  }
}

export default Login;
