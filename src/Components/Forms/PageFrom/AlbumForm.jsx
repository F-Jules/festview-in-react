import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import Feedback from "../ConnecForm/FeedBack";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import Button from "../Composants/Buttons/Button";

const apiHandler = new APIHandler();

const AlbumForm = props => {
  const [albumInfos, setAlbumInfos] = useState({
    performer: props.location.state.pageId
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handlePost = async evt => {
    evt.preventDefault();
    console.log(albumInfos);
    try {
      const dbRes = await apiHandler.post("/api/albums", albumInfos);
      console.log(dbRes);
      props.history.replace(
        `/details/artists/${dbRes.data.performer.slug}/${getId(
          albumInfos.performer
        )}`
      );
    } catch (err) {
      if (err.response) {
        console.log(err.response);
        setErrorMsg(err.response.data["hydra:description"].toUpperCase());
      } else console.log(err);
    }
  };

  const handleInput = evt => {
    setAlbumInfos({ ...albumInfos, [evt.target.name]: evt.target.value });
  };

  const getId = infos => {
    return parseInt(infos.match(/\d+/g));
  };

  const albumType = [
    "--- Veuillez choisir ---",
    "LP",
    "EP",
    "Live",
    "Compilation",
    "Remix",
    "Autre"
  ];

  return (
    <div className={classes.form}>
      <CompTitle name={props.pageName} text="albums" />
      <div className={classes.formItselft}>
        <form onSubmit={handlePost} onChange={handleInput}>
          <Input text="Nom de l'album*" type="text" name="name" />
          {/* <Input
            text="Pochette de l'album*"
            type="url"
            name="coverImageUrl"
          /> */}
          <Input text="Date de sortie*" type="date" name="datePublished" />
          <Input text="Url Spotify" type="url" name="spotifyUrl" />
          <Select
            text="
            Type d'album"
            type="submit"
            name="category"
            option={albumType}
            display={albumType}
          />
          <Button text="submit" />
          <div style={{ borderTop: "1px solid grey", marginTop: "10px" }}>
            <AddCompButton text="autre évenement" />
          </div>
        </form>
      </div>
      <Feedback msg={errorMsg} />
    </div>
  );
};

export default AlbumForm;
