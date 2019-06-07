import React, { Component } from "react";
import { getArtists } from "../../../Api/apiHandler";

class OneArtist extends Component {
  state = { artistInfos: [] };
  componentDidMount = () => {
    const { params } = this.props.match;
    getArtists()
      .then(dbRes => {
        dbRes.data.forEach(oneArtist => {
          if (oneArtist.basic_data.slug.includes(params.artistSlug)) {
            this.setState({
              artistInfos: oneArtist.basic_data
            });
          }
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };
  render() {
    const { artistInfos } = this.state;
    console.log(artistInfos);
    return <p>{artistInfos.name}</p>;
  }
}

export default OneArtist;
