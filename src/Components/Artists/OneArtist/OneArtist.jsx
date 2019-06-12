import React, { Component } from "react";
import { getOneArtist } from "../../../Api/apiHandler";
import classes from "./OneArtist.css";
import ArtistHeader from "../../PageHeaderComp/OnePageHeader";
import Contributor from "../../PageHeaderComp/ContributorComp";

class OneArtist extends Component {
  state = {};

  componentDidMount = () => {
    const { params } = this.props.match;
    getOneArtist(params.id)
      .then(dbRes => {
        const datas = dbRes.data;
        this.setState({
          artistInfos: datas.basic_data,
          artistImage: datas.image,
          creatorInfos: datas.creator,
          editorsInfos: datas.editors
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    const { artistInfos, artistImage, creatorInfos, editorsInfos } = this.state;
    if (!creatorInfos || !artistInfos || !artistImage || !editorsInfos) {
      return <div className={classes.mainDiv} />;
    }
    return (
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <ArtistHeader
            artistImage={artistImage}
            artistInfos={artistInfos}
            isArtist={true}
          />
          <Contributor
            creatorInfos={creatorInfos}
            editorsInfos={editorsInfos}
          />
        </div>
      </div>
    );
  }
}

export default OneArtist;
