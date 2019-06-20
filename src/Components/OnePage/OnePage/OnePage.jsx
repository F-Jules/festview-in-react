import React, { Component } from "react";
import { getOnePageHeader } from "../../../Api/apiHandler";
import classes from "./OnePage.css";
import Contributor from "../PageHeaderComp/ContributorComp";
import OnePageHeader from "../PageHeaderComp/OnePageHeader";
import PageNavBar from "../PageNavBar/PageNavBar";
import ProgComp from "../PageComp/ProgComp/ProgComp";
import MusicComp from "../PageComp/MusicComp/MusicComp";

class OnePage extends Component {
  state = {};

  componentDidMount = async () => {
    const { params } = this.props.match;
    const dBres = await getOnePageHeader(params.id);
    let dataEditors = [];
    if (dBres.data.contributors) dataEditors = dBres.data.contributors;
    this.setState({
      pageInfos: dBres.data,
      creatorInfos: dBres.data.creator,
      editorsInfos: dataEditors
    });
  };

  render() {
    const { pageInfos, creatorInfos, editorsInfos } = this.state;
    if (!pageInfos || !creatorInfos) return <div className={classes.mainDiv} />;
    console.log(pageInfos);
    return (
      <div>
        <div className={classes.header}>
          <OnePageHeader pageInfos={pageInfos} />
          <Contributor
            creatorInfos={creatorInfos}
            editorsInfos={editorsInfos}
          />
        </div>
        <PageNavBar pageType={pageInfos.title} />
        <ProgComp />
        <MusicComp />
      </div>
    );
  }
}

export default OnePage;
