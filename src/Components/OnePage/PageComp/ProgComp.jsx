import React, { Component } from "react";
import { getOnePageComp } from "../../../Api/apiHandler";
import classes from "./PageComp.css";
import plusIcon from "../../../Assets/images/icon-plus.png";
import moreIcon from "../../../Assets/images/icon-more.png";

class ProgComp extends Component {
  state = {};

  componentDidMount = async () => {
    const dbRes = await getOnePageComp(this.props.pageId, "programs");
    this.setState({ programList: dbRes.data });
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
          {/* <a> */}
          <img className={classes.custIcon} src={plusIcon} alt="modify icon" />
          {/* </a> */}
        </div>
        <ul>
          {programList.map(oneProgram => {
            return (
              <div key={oneProgram.id}>
                <li>{oneProgram.featured_program_page_name}</li>
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

export default ProgComp;
