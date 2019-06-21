import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class NetworkComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "networks");
    this.setState({ snList: dbRes.data });
  };

  render() {
    const { snList } = this.state;
    if (!snList) {
      return (
        <div className={classes.pageComp}>
          <h2>Réseaux sociaux</h2>
        </div>
      );
    }
    let noShow;
    if (!this.props.modifyState) noShow = { display: "none" };
    return (
      <div className={classes.pageComp}>
        <h2>Réseaux sociaux</h2>
        <div className={classes.bgc} style={noShow}>
          {/* <a> */}
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
          {/* </a> */}
        </div>
        <ul>
          {snList.map(oneSN => {
            return (
              <div key={oneSN.id}>
                <li>
                  <a href={oneSN.url}>
                    <p>{oneSN.category}</p>
                  </a>
                </li>
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

export default NetworkComp;
