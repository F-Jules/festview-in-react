import React, { Component } from "react";
import { getArtists } from "../../Api/apiHandler";

class TestApi extends Component {
  state = {
    artistList: []
  };

  componentDidMount = () => {
    getArtists()
      .then(dbRes => {
        console.log("All Artists loaded succesfully");
        this.setState({ artistList: dbRes.data });
      })
      .catch(dbErr => {
        console.log("Oops, something went wrong", dbErr);
      });
  };

  render() {
    const { artistList } = this.state;
    console.log(artistList);
    return (
      <div>
        <p>HELLO</p>
      </div>
    );
  }
}

export default TestApi;
