import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import classes from "./OnePage.css";
import Contributor from "../PageHeaderComponent/ContributorComp";
import OnePageHeader from "../PageHeaderComponent/OnePageHeader";
import PageNavBar from "../PageNavBar/PageNavBar";
import EventModule from "../PageModules/EventModule";
import AlbumModule from "../PageModules/AlbumModule";
import DrinkModule from "../PageModules/DrinkModule";
import VideoModule from "../PageModules/VideoModule";
import NetworkModule from "../PageModules/NetworkModule";
import LoadingComponent from "../../../Components/Extras/LoadingComponent";

// Nouvelle instance de la classe APIHandler
const apiHandler = new APIHandler();

class OnePage extends Component {
  state = { modify: false };

  // Fonction call Axios vers la DB.
  fetchingInfosForThisPage = async () => {
    const dBres = await apiHandler.get(
      `/api/${this.props.match.params.entity}/${this.props.match.params.id}`
    );
    this.setState({
      pageInfos: dBres.data,
      creatorInfos: dBres.data.creator,
      editorsInfos: dBres.data.editors
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
    console.log("PAGE INFOS", this.state.pageInfos);
    //console.log("USER INFOS", this.state.creatorInfos);
    // SI PAS D'INFOS CHARGEES AU MOUNTING DU COMPOSANT (CAR ERREUR) CHARGER LE COMPOSANT LOADING
    if (!this.state.pageInfos || !this.state.creatorInfos)
      return <LoadingComponent />;
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
        <EventModule
          eventsInfos={this.state.pageInfos.events}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />

        {/* si OnePage Artist ==> Module musique / Si OnePage Festival ==> Module Bar */}
        {this.state.pageInfos.albums ? (
          <AlbumModule
            albumInfos={this.state.pageInfos.albums}
            pageName={this.state.pageInfos.pseudo}
            modifyState={this.state.modify}
          />
        ) : (
          <DrinkModule
            drinksInfos={this.state.pageInfos.drinks}
            pageName={this.state.pageInfos.pseudo}
            modifyState={this.state.modify}
          />
        )}

        <VideoModule
          videosInfos={this.state.pageInfos.videos}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
        <NetworkModule
          networksInfos={this.state.pageInfos.networks}
          pageName={this.state.pageInfos.pseudo}
          modifyState={this.state.modify}
        />
      </div>
    );
  }
}

export default OnePage;
