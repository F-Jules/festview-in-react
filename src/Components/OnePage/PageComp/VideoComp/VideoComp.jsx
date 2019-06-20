import React, { Component } from "react";
import { getOnePageComp } from "../../../../Api/apiHandler";
import classes from "../PageComp.css";

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
    return (
      <div className={classes.pageComp}>
        <h2>Videos</h2>
        <ul>
          {videoList.map(oneVideo => {
            return (
              <div key={oneVideo.id}>
                <iframe
                  src={oneVideo.video_embedded_url}
                  frameBorder="10"
                  title="video"
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default VideoComp;
