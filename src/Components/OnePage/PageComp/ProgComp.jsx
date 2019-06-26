import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import { Link } from "react-router-dom";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class ProgComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "programs");
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
    console.log(this.props);
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
