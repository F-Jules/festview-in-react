import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "./OnePage.css";
import Contributor from "../PageHeaderComp/ContributorComp";
import OnePageHeader from "../PageHeaderComp/OnePageHeader";
import PageNavBar from "../PageNavBar/PageNavBar";
import ProgComp from "../PageComposant/ProgComp";
import MusicComp from "../PageComposant/MusicComp";
import BarComp from "../PageComposant/BarComp";
import VideoComp from "../PageComposant/VideoComp";
import NetworkComp from "../PageComposant/NetworkComp";
import LoadingComp from "../../../Components/Extras/LoadingComp";

// Nouvelle instance de la classe APIHandler
const apiHandler = new APIHandler();

class OnePage extends Component {
  state = { modify: false };

  // Fonction call Axios vers la DB.
  fetchingInfosForThisPage = async () => {
    const dBres = await apiHandler.get(
      `/api/pages/${this.props.match.params.id}/headers`
    );
    let dataEditors = [];
    if (dBres.data.contributors) dataEditors = dBres.data.contributors;
    this.setState({
      pageInfos: dBres.data,
      creatorInfos: dBres.data.creator,
      editorsInfos: dataEditors
    });
  };

  // On appelle cette fonction lorsque le composant est mount.
  componentDidMount = () => {
    try {
      this.fetchingInfosForThisPage();
    } catch (err) {
      console.log(err);
    }
  };

  enableModify = evt => {
    evt.preventDefault();
    this.setState({ modify: !this.state.modify });
  };

  render() {
    // SI PAS D'INFOS CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
    if (!this.state.pageInfos || !this.state.creatorInfos)
      return <LoadingComp />;
    return (
      // OnePage (Artist ou Festival) contient tous ces modules.

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

        {/* si OnePage Artist ==> Module musique / Si OnePage Festival ==> Module Bar */}
        {this.state.pageInfos.title === "artist" ? (
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
