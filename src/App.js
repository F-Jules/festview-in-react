import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AllArtists from "./Components/Artists/AllArtists";
import OneArtist from "./Components/Artists/OneArtist/OneArtist";
import AllFestivals from "./Components/Festivals/AllFestivals";
import OneFestival from "./Components/Festivals/OneFest/OneFest";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/AllArtists" component={AllArtists} />
        <Route path="/OneArtist/:artistPseudo/:id" component={OneArtist} />
        <Route path="/AllFestivals" component={AllFestivals} />
        <Route
          path="/OneFestival/:festivalPseudo/:id"
          component={OneFestival}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
