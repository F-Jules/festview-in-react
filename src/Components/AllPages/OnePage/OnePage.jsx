import React, { Component } from "react";
import { getOnePage } from "../../../Api/apiHandler";
import classes from "./OnePage.css";
import Contributor from "../PageHeaderComp/ContributorComp";
import OnePageHeader from "../PageHeaderComp/OnePageHeader";

class OnePage extends Component {
  state = {};

  componentDidMount = () => {
    const { params } = this.props.match;
    getOnePage(params.id)
      .then(dbRes => {
        const datas = dbRes.data;
        this.setState({
          pageInfos: datas.basicData,
          pageImage: datas.image,
          creatorInfos: datas.creator,
          editorsInfos: datas.editors,
          festivalDate: datas.event
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    const { pageInfos, pageImage, creatorInfos, editorsInfos } = this.state;
    if (!pageInfos || !pageImage || !creatorInfos || !editorsInfos) {
      return <div className={classes.mainDiv} />;
    }
    return (
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <OnePageHeader pageImage={pageImage} pageInfos={pageInfos} />
          <Contributor
            creatorInfos={creatorInfos}
            editorsInfos={editorsInfos}
          />
        </div>
      </div>
    );
  }
}

export default OnePage;
