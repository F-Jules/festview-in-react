import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import InputForm from "../Composants/Input/InputForm";
import SelectForm from "../Composants/Input/SelectForm";
import classes from "../form.css";
import TitleForm from "../Composants/TitleForm/TitleForm";
import Button from "../Composants/Buttons/Button";
import LoadingComp from "../../Extras/LoadingComp";

const apiHandler = new APIHandler();

class PageHeaderForm extends Component {
  state = { name: "", category: "", pic: "", startingDate: "", endingDate: "" };

  componentDidMount = async () => {
    let dbRes = await apiHandler.get(
      `/api/pages/${this.props.match.params.id}/headers`
    );
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
    console.log(evt.target);
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
    //if (!name) return <LoadingComp />;
    return this.props.match.params.type === "artist" ? (
      <div>
        <TitleForm name={name} />
        <form action="post" className={classes.form}>
          <InputForm
            text={"Nom de l'Artiste*"}
            type="text"
            name="name"
            value={name}
            handleInput={this.handleInput}
          />
          <SelectForm
            text="Sélectionnez*"
            type="submit"
            name="category"
            value={category}
            option={["artist", "band"]}
            display={["Artist solo", "Groupe"]}
            handleInput={this.handleInput}
          />
          <InputForm
            text={"Url de la photo de profil"}
            type="url"
            name="pic"
            value={pic}
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
            name="name"
            value={name}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Date de début*"
            type="date"
            name={startingDate}
            value={this.splitDate(startingDate)}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Date de fin*"
            type="date"
            name={endingDate}
            value={this.splitDate(endingDate)}
            handleInput={this.handleInput}
          />
          <InputForm
            text="Url de la photo de profil"
            type="url"
            name="pic"
            value={pic}
            handleInput={this.handleInput}
          />
          <Button text="Valider les modifications" />
        </form>
      </div>
    );
  }
}

export default PageHeaderForm;
