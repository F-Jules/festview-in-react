import React, { Component } from "react";
import classes from "./allArtists.css";
import ArtistComp from "./ArtistComp/ArtistComp";
import { getArtists } from "../../Api/apiHandler";

class AllArtists extends Component {
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
    if (!artistList) {
      return <div className={classes.mainDiv} />;
    }
    console.log(artistList);
    return (
      <div className={classes.mainDiv}>
        <p>Let's display artists name:</p>
        <ul>
          {artistList.map(oneArtist => {
            return (
              <ArtistComp
                key={oneArtist.basic_data.slug}
                artistName={oneArtist.basic_data.name}
                artistPseudo={oneArtist.basic_data.pseudo}
                artistId={oneArtist.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllArtists;
