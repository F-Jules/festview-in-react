import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllPages } from "./Api/apiHandler";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Components/AllPages/AllPages";
import OnePage from "./Components/AllPages/OnePage/OnePage";
import SearchResultPage from "./Components/AllPages/SearchResult/SearchResultPage";

class App extends Component {
  state = {};

  componentDidMount = () => {
    getAllPages()
      .then(dbRes =>
        this.setState({
          dataList: dbRes.data
        })
      )
      .catch(dbErr => console.log(dbErr));
  };

  render() {
    const { dataList } = this.state;
    return (
      <div className={classes.App}>
        <Header dataList={dataList} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route
            path="/AllArtists"
            render={props => <AllPages {...props} dataList={dataList} />}
          />
          <Route
            path="/AllFestivals"
            render={props => <AllPages {...props} dataList={dataList} />}
          />
          <Route
            path="/SearchResult/:search"
            render={props => (
              <SearchResultPage {...props} dataList={dataList} />
            )}
          />
          <Route path="/:page/:id" component={OnePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
