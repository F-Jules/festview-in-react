import React, { Component } from "react";
import { getFestivals } from "../../Api/apiHandler";
import classes from "./AllFestivals.css";
import FestivalComp from "./FestComp/FestivalComp";

class AllFestivals extends Component {
  state = {
    festivalList: []
  };

  componentDidMount = () => {
    getFestivals()
      .then(dbRes => {
        console.log(dbRes.data);
        this.setState({
          festivalList: dbRes.data
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  };

  render() {
    const { festivalList } = this.state;
    return (
      <div className={classes.mainDiv}>
        <p>Let's display Festival name:</p>
        <ul>
          {festivalList.map(oneFestival => {
            return (
              <FestivalComp
                key={oneFestival.basic_data.slug}
                festivalName={oneFestival.basic_data.name}
                festivalPseudo={oneFestival.basic_data.pseudo}
                festivalId={oneFestival.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllFestivals;
