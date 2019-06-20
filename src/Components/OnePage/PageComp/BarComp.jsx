import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";

class BarComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "bars");
    this.setState({ barList: dbRes.data });
  };

  render() {
    const { barList } = this.state;
    if (!barList) {
      return (
        <div className={classes.pageComp}>
          <h2>Bars</h2>
        </div>
      );
    }
    return (
      <div className={classes.pageComp}>
        <h2>Bars</h2>
        {/* <ul>
          {snList.map(oneSN => {
            return (
              <div key={oneSN.id}>
                <li>
                  <a href={oneSN.url}>
                    <p>{oneSN.category}</p>
                  </a>
                </li>
              </div>
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default BarComp;
