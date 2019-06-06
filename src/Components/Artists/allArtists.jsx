import React, { Component } from "react";
import { getArtists } from "../../Api/apiHandler";

class TestApi extends Component {
  state = {
    artistList: []
  };

  componentDidMount = () => {
    getArtists()
      .then(dbRes => console.log("Here are your artists", dbRes))
      .catch(dbErr => console.log("Oops, something went wrong", dbErr));
  };

  render() {
    return (
      <div>
        <p>HELLO</p>
      </div>
    );
  }
}

export default TestApi;
