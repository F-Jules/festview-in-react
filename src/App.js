import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllPagesHeader } from "./Api/apiHandler";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Components/AllPages/AllPages/AllPages";
import OnePage from "./Components/OnePage/OnePage/OnePage";
import SearchResultPage from "./Components/AllPages/SearchResult/SearchResultPage";

class App extends Component {
  state = {};

  componentDidMount = async () => {
    const dBres = await getAllPagesHeader();
    this.setState({ dataList: dBres.data });
  };

  render() {
    const { dataList } = this.state;
    return (
      <div className={`${classes.App} ${classes.section}`}>
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
