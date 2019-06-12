import React, { Component } from "react";
import { getOneFestival } from "../../../Api/apiHandler";
import classes from "./OneFest.css";
import FestHeader from "../../PageHeaderComp/OnePageHeader";
import Contributor from "../../PageHeaderComp/ContributorComp";

class OneFestival extends Component {
  state = {};

  componentDidMount = () => {
    const { params } = this.props.match;
    getOneFestival(params.id)
      .then(dbRes => {
        const datas = dbRes.data;
        this.setState({
          festivalInfos: datas.basic_data,
          festivalDate: datas.event,
          festivalImage: datas.image,
          creatorInfos: datas.creator,
          editorsInfos: datas.editors
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    const {
      festivalInfos,
      festivalImage,
      festivalDate,
      creatorInfos,
      editorsInfos
    } = this.state;
    if (
      !festivalImage ||
      !festivalInfos ||
      !festivalDate ||
      !creatorInfos ||
      !editorsInfos
    ) {
      return <div className={classes.mainDiv} />;
    }
    return (
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          <FestHeader
            festivalImage={festivalImage}
            festivalInfos={festivalInfos}
            festivalStartDate={festivalDate.starting_date}
            festivalEndDate={festivalDate.ending_date}
            isFestival={true}
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

export default OneFestival;
