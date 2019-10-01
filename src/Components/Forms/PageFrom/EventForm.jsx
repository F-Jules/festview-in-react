import React, { useState } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import Button from "../Composants/Buttons/Button";
import RadioForm from "../Composants/Input/RadioForm";
import Feedback from "../ConnecForm/FeedBack";

const apiHandler = new APIHandler();

const EventForm = props => {
  const [pageInfos] = useState(props.location.state.pageId);

  const [eventInfos, setEventInfos] = useState({
    category: "Live set "
  });

  const [errorMsg, setErrorMsg] = useState("");

  const [checkState, setCheckState] = useState(0);

  const handlePost = async evt => {
    evt.preventDefault();
    pageInfos.includes("artists")
      ? (eventInfos.performer = pageInfos)
      : (eventInfos.organizer = pageInfos);
    try {
      const dbRes = await apiHandler.post("/api/events", eventInfos);
      console.log(dbRes);
      pageInfos.includes("artists")
        ? props.history.replace(
            `/details/artists/${dbRes.data.performer.slug}/${getId(pageInfos)}`
          )
        : props.history.replace(
            `/details/organizers/${dbRes.data.organizer.slug}/${getId(
              pageInfos
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
    setEventInfos({ ...eventInfos, [evt.target.name]: evt.target.value });
  };

  const checkedRadio = (value, index) => {
    setEventInfos({ ...eventInfos, category: value });
    setCheckState(index);
    return value;
  };

  const getId = infos => {
    return parseInt(infos.match(/\d+/g));
  };

  return (
    <div className={classes.form}>
      <CompTitle name={props.location.state.name} text="vidéos" />
      <div className={classes.formItselft}>
        <form onSubmit={handlePost} onChange={handleInput}>
          <Input text="Date de début" type="date" name="startDate" />
          <Input text="Ouverture des portes" type="time" name="doorTime" />
          <RadioForm
            checkState={checkState}
            checkedRadio={checkedRadio}
            text="Type d'évenement"
            type="submit"
            name="category"
            option={["Live set", "Dj set"]}
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

export default EventForm;
