import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import allArtists from "./Components/Artists/AllArtists";
import OneArtist from "./Components/Artists/OneArtist/OneArtist";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/AllArtists" component={allArtists} />
        <Route path="/OneArtist/:artistPseudo/:id" component={OneArtist} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
