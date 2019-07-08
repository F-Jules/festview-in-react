import React, { Component } from "react";
import { getOnePageHeader } from "../../../Api/apiHandlerGet";
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
    if (!this.state.pageInfos || !this.state.creatorInfos)
      return <div className={classes.mainDiv} />;
    return (
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <OnePageHeader
            pageInfos={this.state.pageInfos}
            modifyState={this.state.modify}
          />
          <Contributor
            creatorInfos={this.state.creatorInfos}
            editorsInfos={this.state.editorsInfos}
          />
        </div>
        <PageNavBar
          pageType={this.state.pageInfos.title}
          enableModify={this.enableModify}
          modifyState={this.state.modify}
        />
        <ProgComp
          pageId={this.state.pageInfos.id}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
        {this.state.pageInfos.title === "artists" ? (
          <MusicComp
            pageId={this.state.pageInfos.id}
            pageName={this.state.pageInfos.pseudo}
            modifyState={this.state.modify}
          />
        ) : (
          <BarComp
            pageId={this.state.pageInfos.id}
            pageName={this.state.pageInfos.pseudo}
            modifyState={this.state.modify}
          />
        )}
        <MusicComp
          pageId={this.state.pageInfos.id}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
        <VideoComp
          pageId={this.state.pageInfos.id}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
        <NetworkComp
          pageId={this.state.pageInfos.id}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
      </div>
    );
  }
}

export default OnePage;
