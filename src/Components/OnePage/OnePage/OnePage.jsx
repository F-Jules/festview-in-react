import React, { Component } from "react";
import { getOnePageHeader } from "../../../Api/apiHandler";
import classes from "./OnePage.css";
import Contributor from "../PageHeaderComp/ContributorComp";
import OnePageHeader from "../PageHeaderComp/OnePageHeader";
import PageNavBar from "../PageNavBar/PageNavBar";
import ProgComp from "../PageComp/ProgComp";
import MusicComp from "../PageComp/MusicComp";
import BarComp from "../PageComp/BarComp";
import VideoComp from "../PageComp/VideoComp";
import NetworkComp from "../PageComp/NetworkComp";

class OnePage extends Component {
  state = { modify: false };

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

  enableModify = evt => {
    evt.preventDefault();
    this.setState({ modify: !this.state.modify });
  };

  render() {
    const { pageInfos, creatorInfos, editorsInfos, modify } = this.state;
    if (!pageInfos || !creatorInfos) return <div className={classes.mainDiv} />;
    return (
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <OnePageHeader pageInfos={pageInfos} modifyState={modify} />
          <Contributor
            creatorInfos={creatorInfos}
            editorsInfos={editorsInfos}
          />
        </div>
        <PageNavBar
          pageType={pageInfos.title}
          enableModify={this.enableModify}
          modifyState={modify}
        />
        <ProgComp pageId={pageInfos.id} modifyState={modify} />
        {pageInfos.title === "artists" ? (
          <MusicComp pageId={pageInfos.id} modifyState={modify} />
        ) : (
          <BarComp pageId={pageInfos.id} modifyState={modify} />
        )}
        <MusicComp pageId={pageInfos.id} modifyState={modify} />
        <VideoComp pageId={pageInfos.id} modifyState={modify} />
        <NetworkComp pageId={pageInfos.id} modifyState={modify} />
      </div>
    );
  }
}

export default OnePage;
