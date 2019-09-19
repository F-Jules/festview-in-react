import React, { useState } from "react";
import classes from "../form.css";
import TitleFormCo from "../Composants/TitleForm/TitleFormCo";
import Input from "../Composants/Input/InputForm";
import Button from "../Composants/Buttons/Button";
import FeedBack from "./FeedBack";
import AuthHandler from "../../../Auth/AuthHandler";

const Signup = props => {
  const [userInfos, setUserInfos] = useState({});
  const [errMsg, setErrMsg] = useState("");

  const checkConfirmedPassword = () => {
    if (userInfos.password === userInfos.confirmedPassword) return true;
  };

  const handlePost = evt => {
    evt.preventDefault();
    if (checkConfirmedPassword()) {
      AuthHandler.signup(userInfos)
        .then(dbRes => {
          console.log(dbRes);
          if (dbRes.status === 200 || dbRes.status === 201) {
            props.history.push({
              pathname: "/login",
              state: { msg: "Account created succesfully." }
            });
          }
        })
        .catch(dbErr => {
          console.log("YOYO", dbErr.response);
          if (dbErr.response.status === 400 || dbErr.response.status === 500) {
            setErrMsg(dbErr.response.data["hydra:description"].toUpperCase());
          }
        });
    } else setErrMsg("Oups, it seems that your password is not matching.");
  };

  const handleInput = evt => {
    evt.preventDefault();
    setUserInfos({ ...userInfos, [evt.target.name]: evt.target.value });
  };
  console.log(userInfos);
  return (
    <div className={classes.form}>
      <TitleFormCo text="Créez votre compte" />
      <form onSubmit={handlePost} onChange={handleInput}>
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
        <Button text="Créer son compte" />
      </form>
      <FeedBack msg={errMsg} />
    </div>
  );
};

export default Signup;
