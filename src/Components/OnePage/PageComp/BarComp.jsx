import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";
import { Link } from "react-router-dom";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class BarComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "bars");
    this.setState({ barList: dbRes.data });
  };

  getAddAddress = (pageName, id) => {
    return `/add/barInfos/${pageName}/${id}`;
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
    let noShow;
    if (!this.props.modifyState) noShow = { display: "none" };
    return (
      <div className={classes.pageComp}>
        <h2>Bars</h2>
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
          {barList.map(oneDrink => {
            return (
              <div key={oneDrink.id}>
                <li>
                  <a href={oneDrink.url}>
                    <p>{oneDrink.category}</p>
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

export default BarComp;
