import React, { Component } from "react";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import CancelButton from "../Composants/Buttons/CancelButton";
import Button from "../Composants/Buttons/Button";
import APIHandler from "../../../Api/ApiHandler";

const apiHandler = new APIHandler();
class SocialForm extends Component {
  state = {
    formArr: [],
    title: "networks",
    category: "",
    url: "",
    user_id: "5cf6707352f1a800926e5442"
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const postModule = await apiHandler.post(
      `/api/pages/${this.props.match.params.id}/modules`,
      this.state
    );
    console.log(postModule);
  };

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addForm = form => {
    this.state.formArr.push(form);
    this.setState({ formArr: this.state.formArr });
  };

  removeForm = () => {
    if (this.state.formArr.length > 0) this.state.formArr.pop();
    this.setState({ formArr: this.state.formArr });
  };

  render() {
    const name = this.props.match.params.page.toUpperCase();
    const { formArr } = this.state;
    const newForm = (
      <div className={classes.formItselft}>
        <form action="post" onSubmit={this.handleSubmit}>
          <Select
            text="
            Nom du site*"
            type="submit"
            name="category"
            option={[
              "Dailymotion",
              "Deezer",
              "Facebook",
              "Instagram",
              "Last.fm",
              "Resident Advisor",
              "SoundCloud",
              "Spotify",
              "Twitter",
              "Youtube"
            ]}
            handleInput={this.handleInput}
          />
          <Input
            text="Url*"
            type="url"
            name="url"
            handleInput={this.handleInput}
          />
          <Button text="submit" />
        </form>
      </div>
    );
    return (
      <div className={classes.form}>
        <CompTitle name={name} text="vidéos" />
        {newForm}
        {formArr.map(oneEl => {
          return oneEl;
        })}
        <CancelButton removeForm={this.removeForm} />
        <AddCompButton
          text="autre vidéo"
          addAForm={this.addForm}
          newForm={newForm}
        />
      </div>
    );
  }
}

export default SocialForm;
