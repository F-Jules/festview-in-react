import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import classes from "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Pages/AllPages/AllPages/AllPages";
import OnePage from "./Pages/OnePage/OnePage/OnePage";
import SearchResultPage from "./Pages/AllPages/SearchResult/SearchResultPage";
import PageHeaderForm from "./Components/Forms/HeaderForm/PageHeaderForm";
import Login from "./Components/Forms/ConnecForm/Login";
import Signup from "./Components/Forms/ConnecForm/Signup";
import EventForm from "./Components/Forms/PageFrom/EventForm";
import AlbumForm from "./Components/Forms/PageFrom/AlbumForm";
import VideoForm from "./Components/Forms/PageFrom/VideoForm";
import NetworkForm from "./Components/Forms/PageFrom/NetworkForm";
import DrinkForm from "./Components/Forms/PageFrom/DrinkForm";
import CreateForm from "./Components/Forms/CreateForm/CreateForm";
import LoadingComponent from "./Components/Extras/LoadingComponent";
import AuthHandler from "./Auth/AuthHandler";
import AuthContext from "./Auth/AuthContext";
import ProtectedRoute from "./Auth/ProtectedRoute";

AuthHandler.tokenSetUp();

const App = () => {
  const [isLogged, setLogState] = useState(AuthHandler.isAuthenticated());

  const NavBarWithRouter = withRouter(NavBar);

  const context = {
    isLogged,
    setLogState
  };

  return (
    <div className={`${classes.App} ${classes.section}`}>
      <AuthContext.Provider value={context}>
        <NavBarWithRouter />
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

          <ProtectedRoute
            path="/edit/:type/:page/:id"
            component={PageHeaderForm}
          />
          <ProtectedRoute
            path={["/create/festival", "/create/artist"]}
            component={CreateForm}
          />
          <ProtectedRoute path="/add/prog/:page/:id" component={EventForm} />
          <ProtectedRoute path="/add/album/:page/:id" component={AlbumForm} />
          <ProtectedRoute path="/add/drinks" component={DrinkForm} />
          <ProtectedRoute path="/add/video/:page/:id" component={VideoForm} />
          <ProtectedRoute
            path="/add/network/:page/:id"
            component={NetworkForm}
          />

          {/* -------------Random and test---------------  */}

          <Route path="/loading" component={LoadingComponent} />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
