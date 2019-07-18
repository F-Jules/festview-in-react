import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const apiHandler = new APIHandler();
class VideoComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await apiHandler.get(
      `/api/pages/${this.props.pageId}/videos`
    );
    this.setState({ videoList: dbRes.data });
  };

  getAddAddress = (pageName, id) => {
    return `/add/video/${pageName}/${id}`;
  };

  render() {
    const { videoList } = this.state;
    if (!videoList) {
      return (
        <div className={classes.pageComp}>
          <h2>Videos</h2>
        </div>
      );
    }
    let noShow;
    if (!this.props.modifyState) noShow = { display: "none" };
    return (
      <div className={classes.pageComp}>
        <h2>Videos</h2>
        <div className={classes.bgc} style={noShow}>
          <Link to={this.getAddAddress(this.props.pageName, this.props.pageId)}>
            <img
              className={classes.custIcon}
              src={plusIcon}
              alt="modify icon"
            />
          </Link>
        </div>
        <ul>
          {videoList.map(oneVideo => {
            return (
              <div key={oneVideo.id}>
                <iframe
                  src={oneVideo.video_embedded_url}
                  frameBorder="10"
                  title="video"
                />
                <li style={noShow}>
                  <Link
                    to={this.getAddAddress(
                      this.props.pageName,
                      this.props.pageId
                    )}
                  >
                    <img
                      className={classes.custIcon}
                      src={moreIcon}
                      alt="modify icon"
                    />
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default VideoComp;
