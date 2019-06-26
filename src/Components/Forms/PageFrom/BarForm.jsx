import React, { Component } from "react";
import classes from "../form.css";
import CompTitle from "../Composants/TitleForm/CompTitleForm";
import Input from "../Composants/Input/InputForm";
import Select from "../Composants/Input/SelectForm";
import AddCompButton from "../Composants/Buttons/AddContentButton";
import CancelButton from "../Composants/Buttons/CancelButton";
import Button from "../Composants/Buttons/Button";

class BarForm extends Component {
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
            text="Nom de la boisson*"
            type="url"
            name="drinkName"
            handleInput={this.handleInput}
          />
          <Select
            text="
            Type de boisson*"
            type="submit"
            name="drinkType"
            option={[
              "Bière (demi - 25 cl)",
              "Bière (pinte - 50 cl)",
              "Vin",
              "Champagne",
              "Cocktail",
              "Shooter",
              "Soft"
            ]}
            handleInput={this.handleInput}
          />
          <Input
            text="Prix (€)*"
            type="number"
            name="drinkPrice"
            handleInput={this.handleInput}
          />
          <Button text="submit" />
        </form>
      </div>
    );
    return (
      <div className={classes.form}>
        <CompTitle name={name} text="boissons" />
        {newForm}
        {formArr.map(oneEl => {
          return oneEl;
        })}
        <CancelButton removeForm={this.removeForm} />
        <AddCompButton
          text="autre boisson"
          addAForm={this.addForm}
          newForm={newForm}
        />
      </div>
    );
  }
}

export default BarForm;
