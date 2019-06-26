import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class NetworkComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "networks");
    this.setState({ snList: dbRes.data });
  };

  getAddAddress = (pageName, id) => {
    return `/add/network/${pageName}/${id}`;
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
          <Link to={this.getAddAddress(this.props.pageName, this.props.pageId)}>
            <img
              className={classes.custIcon}
              src={plusIcon}
              alt="modify icon"
            />
          </Link>
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

export default NetworkComp;
