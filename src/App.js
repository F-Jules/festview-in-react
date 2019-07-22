import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import APIHandler from "./Api/ApiHandler";
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
import CreateForm from "./Components/Forms/CreateForm/CreateForm";

const apiHandler = new APIHandler();

const App = () => {
  const [headerState, setHeaderState] = useState([]);

  useEffect(() => {
    const fetchHeaderInfos = async () => {
      const dbRes = await apiHandler.get("/api/pages/headers");
      setHeaderState(dbRes.data);
    };
    fetchHeaderInfos();
  }, []);

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
          path={["/AllArtists", "/AllFestivals"]}
          render={props => <AllPages {...props} dataList={headerState} />}
        />

        {/* -------------get the search result page---------------  */}

        <Route
          path="/search"
          render={props => (
            <SearchResultPage {...props} dataList={headerState} />
          )}
        />

        {/* ----------------- get pages details ------------------  */}

        <Route path="/details/:page/:id" component={OnePage} />

        {/* -------------get pages forms---------------  */}

        <Route path="/edit/:type/:page/:id" component={PageHeaderForm} />
        <Route
          path={["/create/festival", "/create/artist"]}
          component={CreateForm}
        />
        <Route path="/add/prog/:page/:id" component={ProgForm} />
        <Route path="/add/album/:page/:id" component={MusicForm} />
        <Route path="/add/barInfos/:page/:id" component={BarForm} />
        <Route path="/add/video/:page/:id" component={VideoForm} />
        <Route path="/add/network/:page/:id" component={SocialForm} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
