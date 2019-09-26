import React, { useState, useEffect } from "react";
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

const OnePage = props => {
  const [modifyState, setModifyState] = useState(false);
  const [pageInfos, setpageInfos] = useState([]);
  const [creatorInfos, setCreatorInfos] = useState([]);
  const [editorsInfos, setEditorsInfos] = useState([]);

  // Fonction call Axios vers la DB.
  const fetchingInfosForThisPage = async () => {
    const dBres = await apiHandler.get(
      `/api/${props.match.params.entity}/${props.match.params.id}`
    );
    setpageInfos(dBres.data);
    setCreatorInfos(dBres.data.creator);
    setEditorsInfos(dBres.data.editors);
  };

  // On appelle cette fonction lorsque le composant est mount.
  useEffect(() => {
    try {
      fetchingInfosForThisPage();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const enableModify = evt => {
    evt.preventDefault();
    setModifyState(!modifyState);
  };

  if (
    !pageInfos ||
    pageInfos.length === 0 ||
    !creatorInfos ||
    creatorInfos.length === 0
  )
    return <LoadingComponent />;

  return (
    <div className={classes.mainDiv}>
      <div className={classes.header}>
        <OnePageHeader
          pageInfos={pageInfos}
          modifyState={modifyState}
          id={props.match.params.id}
        />
        <Contributor creatorInfos={creatorInfos} editorsInfos={editorsInfos} />
      </div>
      <PageNavBar
        pageType={pageInfos.title}
        enableModify={enableModify}
        modifyState={enableModify}
      />
      <EventModule
        eventsInfos={pageInfos.events}
        pageName={pageInfos.name}
        pageSlug={pageInfos.slug}
        pageId={pageInfos["@id"]}
        modifyState={modifyState}
      />

      {/* si OnePage Artist ==> Module musique / Si OnePage Festival ==> Module Bar */}
      {pageInfos.entityName === "Artist" ? (
        <AlbumModule
          albumInfos={pageInfos.albums}
          pageName={pageInfos.name}
          pageSlug={pageInfos.slug}
          pageId={pageInfos["@id"]}
          modifyState={modifyState}
        />
      ) : (
        <DrinkModule
          drinksInfos={pageInfos.drinks}
          pageName={pageInfos.name}
          pageSlug={pageInfos.slug}
          pageId={pageInfos["@id"]}
          modifyState={modifyState}
        />
      )}
      {/* <VideoModule
        videosInfos={pageInfos.videos}
        pageName={pageInfos.name}
        modifyState={modifyState}
      /> */}
      <NetworkModule
        networksInfos={pageInfos.networks}
        pageName={pageInfos.name}
        pageSlug={pageInfos.slug}
        pageId={pageInfos["@id"]}
        modifyState={modifyState}
      />
    </div>
  );
};

export default OnePage;
