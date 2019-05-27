import React from "react";
import classes from "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
