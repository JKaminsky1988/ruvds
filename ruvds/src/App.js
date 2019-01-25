import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import "./css/all.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Grid container>
        <Header />
        <Main />
        <Footer />
      </Grid>
    );
  }
}

export default App;
