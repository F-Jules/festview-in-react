import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const searchInfos = txt.replace(/[^A-Za-z0-9]/g, "-").toLowerCase();
    return `/SearchResult/${searchInfos}`;
  };

  clearInput = () => {
    this.setState({ inputField: "" });
    return this.props.closeModal;
  };

  render() {
    const { inputField, inputList } = this.state;
    if (!this.props.dataList) return null;
    return (
      <div>
        <h2>RECHERCHER</h2>
        <form>
          <input
            size="60"
            list={inputList}
            value={inputField}
            type="text"
            onChange={this.checkInputLength}
          />
          <button onClick={this.clearInput}>
            <Link to={this.getSearchResult(inputField)}>GO</Link>
          </button>
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
