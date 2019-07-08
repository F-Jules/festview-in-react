import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../../../Forms/Composants/Input/input.css";
import Button from "../../../Forms/Composants/Buttons/Button";

class SearchBar extends Component {
  state = {
    inputField: "",
    inputList: ""
  };

  checkInputLength = evt => {
    this.setState({ inputField: evt.target.value });
    if (evt.target.value.length > 1) {
      this.setState({ inputList: "data" });
    }
  };

  getSearchResult = txt => {
    let searchInfos = " ";
    if (this.state.inputField.length > 0)
      searchInfos = txt.replace(/[^A-Za-z0-9]/g, "-").toLowerCase();
    return `/SearchResult/${searchInfos}`;
  };

  clearInput = () => {
    this.setState({ inputField: "" });
  };

  render() {
    const { inputField, inputList } = this.state;
    if (!this.props.dataList) {
      return (
        <div>
          <label className={classes.label}>RECHERCHER</label>
          <input
            className={classes.input}
            size="60"
            list={inputList}
            value={inputField}
            type="text"
            onChange={this.checkInputLength}
          />
        </div>
      );
    }
    return (
      <div>
        <form>
          <label className={classes.label}>RECHERCHER</label>
          <input
            className={classes.input}
            size="60"
            list={inputList}
            value={inputField}
            type="text"
            onChange={this.checkInputLength}
          />
          <div onClick={this.props.closeModal}>
            <Link to={this.getSearchResult(inputField)}>
              <Button text="Search" />
            </Link>
          </div>
        </form>
        <datalist id="data">
          {this.props.dataList.map(oneData => (
            <option key={oneData.pseudo} value={oneData.name} />
          ))}
        </datalist>
      </div>
    );
  }
}

export default SearchBar;
