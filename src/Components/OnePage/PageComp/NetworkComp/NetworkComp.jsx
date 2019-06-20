import React, { Component } from "react";
import { getOnePageComp } from "../../../../Api/apiHandler";
import classes from "../PageComp.css";

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
    console.log(snList);
    return (
      <div className={classes.pageComp}>
        <h2>Réseaux sociaux</h2>
        <ul>
          {snList.map(oneSN => {
            return (
              <div key={oneSN.id}>
                <li>
                  <p>{oneSN.category}</p>
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
