import React, { useState } from "react";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import Button from "../Composants/Buttons/Button";
import APIHandler from "../../../Api/ApiHandler";
import Feedback from "../ConnecForm/FeedBack";

const apiHandler = new APIHandler();

const SocialForm = props => {
  const [pageInfos] = useState(props.location.state.pageId);

  const [networkInfos, setNetworkInfos] = useState({});

  const [errorMsg, setErrorMsg] = useState("");

  const handlePost = async evt => {
    evt.preventDefault();
    pageInfos.includes("artists")
      ? (networkInfos.performer = pageInfos)
      : (networkInfos.organizer = pageInfos);
    try {
      const dbRes = await apiHandler.post("/api/networks", networkInfos);
      networkInfos.pageId.includes("artists")
        ? props.history.replace(
            `/details/artists/${dbRes.data.performer.slug}/${getId(
              networkInfos.pageId
            )}`
          )
        : props.history.replace(
            `/details/organizers/${dbRes.data.organizer.slug}/${getId(
              networkInfos.pageId
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
    evt.preventDefault();
    setNetworkInfos({ ...networkInfos, [evt.target.name]: evt.target.value });
  };

  const networks = [
    "--- Veuillez choisir ---",
    "Dailymotion",
    "Deezer",
    "Facebook",
    "Instagram",
    "Last.fm",
    "Resident Advisor",
    "SoundCloud",
    "Spotify",
    "Twitter",
    "YouTube"
  ];

  const getId = infos => {
    return parseInt(infos.match(/\d+/g));
  };

  return (
    <div className={classes.form}>
      <CompTitle name={props.location.state.name} text="vidéos" />
      <div className={classes.formItselft}>
        <form onSubmit={handlePost} onChange={handleInput}>
          <Select
            text="
            Nom du site*"
            type="submit"
            name="category"
            option={networks}
            display={networks}
          />
          <Input text="Url*" type="url" name="url" />
          <Button text="submit" />
          <div style={{ borderTop: "1px solid grey", marginTop: "10px" }}>
            <AddCompButton text="autre vidéo" />
          </div>
        </form>
      </div>
      <Feedback msg={errorMsg} />
    </div>
  );
};

export default SocialForm;
