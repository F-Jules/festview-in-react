import React, { Component } from "react";
import APIHandler from "../../../Api/ApiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

const apiHandler = new APIHandler();

class ProgComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await apiHandler.get(
      `/api/pages/${this.props.pageId}/programs`
    );
    this.setState({ programList: dbRes.data });
  };

  getAddAddress = (pageName, id) => {
    return `/add/prog/${pageName}/${id}`;
  };

  render() {
    const { programList } = this.state;
    if (!programList) {
      return (
        <div className={classes.pageComp}>
          <h2>Programmation</h2>
        </div>
      );
    }
    let noShow;
    if (!this.props.modifyState) noShow = { display: "none" };
    return (
      <div className={classes.pageComp}>
        <h2>Programmation</h2>
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
          {programList.map(oneProgram => {
            return (
              <div key={oneProgram.id}>
                <li>{oneProgram.featured_program_page_name}</li>
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

export default ProgComp;
