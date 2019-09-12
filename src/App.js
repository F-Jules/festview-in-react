import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Pages/AllPages/AllPages/AllPages";
import OnePage from "./Pages/OnePage/OnePage/OnePage";
import SearchResultPage from "./Pages/AllPages/SearchResult/SearchResultPage";
import PageHeaderForm from "./Components/Forms/HeaderForm/PageHeaderForm";
import Login from "./Components/Forms/ConnecForm/Login";
import Signup from "./Components/Forms/ConnecForm/Signup";
import ProgForm from "./Components/Forms/PageFrom/ProgForm";
import MusicForm from "./Components/Forms/PageFrom/MusicForm";
import VideoForm from "./Components/Forms/PageFrom/VideoForm";
import SocialForm from "./Components/Forms/PageFrom/NetworkForm";
import BarForm from "./Components/Forms/PageFrom/BarForm";
import CreateForm from "./Components/Forms/CreateForm/CreateForm";
import LoadingComponent from "./Components/Extras/LoadingComponent";

const App = () => {
  return (
    <div className={`${classes.App} ${classes.section}`}>
      <Header />
      <Switch>
        {/* ---------------get home page-----------------  */}

        <Route path="/" component={HomePage} exact />

        {/* --------get signup / login forms------------- */}

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {/* ------get all artist or festivals pages and passing informations has props-----  */}

        <Route path={["/AllArtists", "/AllFestivals"]} component={AllPages} />

        {/* -------------get the search result page and passing informations has props---------------  */}

        <Route path="/search" component={SearchResultPage} />

        {/* ----------------- get pages details ------------------  */}

        <Route path="/details/:entity/:page/:id" component={OnePage} />

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

        {/* -------------Random and test---------------  */}

        <Route path="/loading" component={LoadingComponent} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
