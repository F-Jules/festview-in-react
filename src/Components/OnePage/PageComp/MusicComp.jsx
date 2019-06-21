import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class MusicComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "albums");
    this.setState({ musicList: dbRes.data });
  };

  render() {
    const { musicList } = this.state;
    if (!musicList) {
      return (
        <div className={classes.pageComp}>
          <h2>Musique</h2>
        </div>
      );
    }
    let noShow;
    if (!this.props.modifyState) noShow = { display: "none" };
    return (
      <div className={classes.pageComp}>
        <h2>Musique</h2>
        <div className={classes.bgc} style={noShow}>
          {/* <a> */}
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
          {/* </a> */}
        </div>
        <ul>
          {musicList.map(oneProgram => {
            return (
              <div key={oneProgram.id}>
                <li>
                  <img
                    src={`https://s3.eu-west-3.amazonaws.com/festview/${
                      oneProgram.cover_file
                    }`}
                    alt={oneProgram.cover_alt}
                  />
                </li>
                <li>{oneProgram.name}</li>
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

export default MusicComp;
