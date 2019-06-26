import React, { Component } from "react";
import { getOnePageHeader } from "../../../Api/apiHandler";
import InputForm from "../Composants/Input/InputForm";
import SelectForm from "../Composants/Input/SelectForm";
import classes from "../form.css";
import TitleForm from "../Composants/TitleForm/TitleForm";
import Button from "../Composants/Buttons/Button";

class PageHeaderForm extends Component {
  state = { name: "", category: "", pic: "", startingDate: "", endingDate: "" };

  componentDidMount = async () => {
    let dbRes = await getOnePageHeader(this.props.match.params.id);
    const res = dbRes.data;
    if (res.title === "artist") {
      this.setState({
        name: res.name,
        category: res.category,
        pic: res.profile_picture_file
      });
    } else if (res.title === "festival") {
      this.setState({
        name: res.name,
        startingDate: res.event_starting_date,
        endingDate: res.event_ending_date,
        pic: res.profile_picture_file
      });
    }
  };

  handleInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  splitDate = oneDate => {
    const formated = oneDate.split("T");
    return formated[0]
      .split("-")
      .reverse()
      .join("-");
  };

  render() {
    const { name, category, pic, startingDate, endingDate } = this.state;
    if (!name) return null;
    return this.props.match.params.type === "artist" ? (
      <div>
        <TitleForm name={name} />
        <form action="post" className={classes.form}>
          <InputForm
            text={"Nom de l'Artiste*"}
            type="text"
            name={name}
            placeholder={name}
            handleInput={this.handleInput}
          />
          <SelectForm
            text="Sélectionnez*"
            type="submit"
            name={category}
            option={["Artist solo", "Groupe"]}
            handleInput={this.handleInput}
          />
          <InputForm
            text={"Url de la photo de profil"}
            type="url"
            name={pic}
            placeholder={pic}
            handleInput={this.handleInput}
          />
          <Button text="Valider les modifications" />
        </form>
      </div>
    ) : (
      <div>
        <TitleForm name={name} />
        <form action="post" className={classes.form}>
          <InputForm
            text="Nom du festival*"
            type="text"
            name={name}
            placeholder={name}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Date de début*"
            type="date"
            name={startingDate}
            placeholder={this.splitDate(startingDate)}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Date de fin*"
            type="date"
            name={endingDate}
            placeholder={this.splitDate(endingDate)}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Url de la photo de profil"
            type="url"
            name={pic}
            placeholder={pic}
            handleInput={this.handleInput}
          />
          <Button text="Valider les modifications" />
        </form>
      </div>
    );
  }
}

export default PageHeaderForm;
