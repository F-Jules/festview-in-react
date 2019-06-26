import React, { Component } from "react";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import CancelButton from "../Composants/Buttons/CancelButton";
import Button from "../Composants/Buttons/Button";

class ProgForm extends Component {
  state = { formArr: [] };

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addForm = form => {
    this.state.formArr.push(form);
    this.setState({ formArr: this.state.formArr });
  };

  removeForm = form => {
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
            text="Date*"
            type="date"
            name="date"
            handleInput={this.handleInput}
          />
          <Input
            text="Heure"
            type="time"
            name="time"
            handleInput={this.handleInput}
          />
          <Input
            text="Organisateur*"
            type="text"
            name="organisateur"
            handleInput={this.handleInput}
          />
          <Select
            text="Sélectionnez*"
            type="submit"
            name="set"
            option={["Live Set", "DJ Set"]}
            handleInput={this.handleInput}
          />
          <Input
            text="Url billetterie"
            type="url"
            name="ticket"
            handleInput={this.handleInput}
          />
          <Button text="submit" />
        </form>
      </div>
    );
    return (
      <div className={classes.form}>
        <CompTitle name={name} text="Lives" />
        {newForm}
        {formArr.map(oneEl => {
          return oneEl;
        })}
        <CancelButton removeForm={this.removeForm} />
        <AddCompButton
          text="programme"
          addAForm={this.addForm}
          newForm={newForm}
        />
      </div>
    );
  }
}

export default ProgForm;
