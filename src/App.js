import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllPagesHeader } from "./Api/apiHandlerGet";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Components/AllPages/AllPages/AllPages";
import OnePage from "./Components/OnePage/OnePage/OnePage";
import SearchResultPage from "./Components/AllPages/SearchResult/SearchResultPage";
import PageHeaderForm from "./Components/Forms/HeaderForm/PageHeaderForm";
import Login from "./Components/Forms/ConnecForm/Login";
import Signup from "./Components/Forms/ConnecForm/Signup";
import ProgForm from "./Components/Forms/PageFrom/ProgForm";
import MusicForm from "./Components/Forms/PageFrom/MusicForm";
import VideoForm from "./Components/Forms/PageFrom/VideoForm";
import SocialForm from "./Components/Forms/PageFrom/NetworkForm";
import BarForm from "./Components/Forms/PageFrom/BarForm";

class App extends Component {
  state = {};

  componentDidMount = async () => {
    const dBres = await getAllPagesHeader();
    this.setState({ dataList: dBres.data });
  };

  render() {
    return (
      <div className={`${classes.App} ${classes.section}`}>
        <Header />
        <Switch>
          {/* ---------------get home page-----------------  */}

          <Route path="/" component={HomePage} exact />

          {/* --------get signup / login forms------------- */}

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          {/* ------get all artist or festivals pages-----  */}

          <Route
            path="/AllArtists"
            render={props => (
              <AllPages {...props} dataList={this.state.dataList} />
            )}
          />
          <Route
            path="/AllFestivals"
            render={props => (
              <AllPages {...props} dataList={this.state.dataList} />
            )}
          />

          {/* -------------get the search result page---------------  */}

          <Route
            path="/search"
            render={props => (
              <SearchResultPage {...props} dataList={this.state.dataList} />
            )}
          />

          {/* ----------------- get pages details ------------------  */}

          <Route path="/details/:page/:id" component={OnePage} />

          {/* -------------get pages forms---------------  */}

          <Route path="/edit/:type/:page/:id" component={PageHeaderForm} />
          <Route path="/add/prog/:page/:id" component={ProgForm} />
          <Route path="/add/album/:page/:id" component={MusicForm} />
          <Route path="/add/barInfos/:page/:id" component={BarForm} />
          <Route path="/add/video/:page/:id" component={VideoForm} />
          <Route path="/add/network/:page/:id" component={SocialForm} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
