import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import Button from "../Composants/Buttons/Button";
import Feedback from "../ConnecForm/FeedBack";

const apiHandler = new APIHandler();

const VideoForm = props => {
  const [pageInfos] = useState(props.location.state.pageId);

  const [videoInfos, setVideoInfos] = useState({});

  const [errorMsg, setErrorMsg] = useState("");

  const handlePost = async evt => {
    evt.preventDefault();
    console.log(videoInfos);
    pageInfos.includes("artists")
      ? (videoInfos.performer = pageInfos)
      : (videoInfos.organizer = pageInfos);
    try {
      const dbRes = await apiHandler.post("/api/albums", videoInfos);
      console.log(dbRes);
      props.history.replace(
        `/details/artists/${dbRes.data.performer.slug}/${getId(
          videoInfos.performer
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
    setVideoInfos({ ...videoInfos, [evt.target.name]: evt.target.value });
  };

  const getId = infos => {
    return parseInt(infos.match(/\d+/g));
  };

  const videoType = [
    "--- Veuillez choisir ---",
    "Live",
    "Live session",
    "Freestyle",
    "Clip",
    "Documentaire",
    "Interview"
  ];

  return (
    <div className={classes.form}>
      <CompTitle name={props.location.state.name} text="vidéos" />
      <div className={classes.formItselft}>
        <form onSubmit={handlePost} onChange={handleInput}>
          <Input text="Url*" type="url" name="url" />
          <Select
            text="
            Type de vidéo"
            type="submit"
            name="category"
            option={videoType}
            display={videoType}
          />
          <Input text="Date*" type="date" name="datePublished" />
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

export default VideoForm;
