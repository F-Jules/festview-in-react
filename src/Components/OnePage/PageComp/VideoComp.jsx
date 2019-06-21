import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class VideoComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "videos");
    this.setState({ videoList: dbRes.data });
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
          {/* <a> */}
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
          {/* </a> */}
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
                  {/* <a> */}
                  <img
                    className={classes.custIcon}
                    src={moreIcon}
                    alt="modify icon"
                  />
                  {/* </a> */}
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
