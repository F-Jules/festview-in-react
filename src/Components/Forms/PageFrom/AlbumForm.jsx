import React, { Component } from "react";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import CancelButton from "../Composants/Buttons/CancelButton";
import Button from "../Composants/Buttons/Button";

class MusicForm extends Component {
  state = { formArr: [] };

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
        <form action="post">
          <Input
            text="Nom de l'album*"
            type="text"
            name="albumName"
            handleInput={this.handleInput}
          />
          <Input
            text="Pochette de l'album*"
            type="url"
            name="albumPic"
            handleInput={this.handleInput}
          />
          <Input
            text="Date de sortie*"
            type="date"
            name="realeaseDate"
            handleInput={this.handleInput}
          />
          <Select
            text="
            Type d'album"
            type="submit"
            name="albumType"
            option={["LP", "EP", "Live", "Compilation"]}
            handleInput={this.handleInput}
          />
          <Input
            text="Url Spotify"
            type="url"
            name="albumSpotify"
            handleInput={this.handleInput}
          />
          <Button text="submit" />
        </form>
      </div>
    );
    return (
      <div className={classes.form}>
        <CompTitle name={name} text="albums" />
        {newForm}
        {formArr.map(oneEl => {
          return oneEl;
        })}
        <CancelButton removeForm={this.removeForm} />
        <AddCompButton
          text="autre album"
          addAForm={this.addForm}
          newForm={newForm}
        />
      </div>
    );
  }
}

export default MusicForm;
