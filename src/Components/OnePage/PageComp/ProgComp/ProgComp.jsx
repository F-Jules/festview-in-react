import React, { Component } from "react";
import { getOnePageComp } from "../../../../Api/apiHandler";
import classes from "../PageComp.css";

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
    return (
      <div className={classes.pageComp}>
        <h2>Programmation</h2>
        <ul>
          {programList.map(oneProgram => {
            return (
              <div key={oneProgram.id}>
                <li>{oneProgram.featured_program_page_name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProgComp;
