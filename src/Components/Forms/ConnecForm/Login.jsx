import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../form.css";
import InputFrom from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import CreateButton from "../Composants/Buttons/CreateAccBut";
import FeedBack from "./FeedBack";
import AuthHandler from "../../../Auth/AuthHandler";
import AuthContext from "../../../Auth/AuthContext";

const Login = props => {
  const [credentialsState, setCredentialsState] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const { setLogState } = useContext(AuthContext);
  const handlePost = async evt => {
    evt.preventDefault();
    try {
      await AuthHandler.authenticate(credentialsState);
      setErrorMsg("");
      setLogState(true);
      if (props.history.location.state.from)
        props.history.replace(props.history.location.state.from.pathname);
      else props.history.replace("/");
    } catch (err) {
      if (err.response) {
        if (err.response.status !== 200 || err.response.status !== 201) {
          if (err.response.data.error)
            setErrorMsg(err.response.data.error.exception[0].message);
          else if (err.response.data.message)
            setErrorMsg(err.response.data.message);
          else setErrorMsg("Oups... Something went wrong..");
        }
      } else console.log(err);
    }
  };

  const handleInput = evt => {
    evt.preventDefault();
    setCredentialsState({
      ...credentialsState,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div className={classes.form}>
      <TitleFormCo text="Connexion" />
      <form onSubmit={handlePost} onChange={handleInput}>
        <InputFrom text="Email" type="email" name="email" />
        <InputFrom text="Mot de passe" type="password" name="password" />
        <Button text="Me Connecter" />
      </form>
      {props.location.state === undefined ? (
        <Link to="/signup">
          <CreateButton />
        </Link>
      ) : (
        <FeedBack msg={props.location.state.msg} />
      )}
      <FeedBack msg={errorMsg} />
    </div>
  );
};

export default Login;
