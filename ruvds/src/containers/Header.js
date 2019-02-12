import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
  render() {
    const date = new Date();
    const time = date.getHours();
    return (
      <Grid item xs={12} className="header">
        <Grid container>
          <Grid item xs={12}>
            <h1>
              Good{" "}
              {`${time}` < 12
                ? `morning`
                : `${time}` >= 12 || `${time}` < 17
                ? `afternoon`
                : `evening`}
              !
            </h1>
            <p>What are you going to do today?</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Header;
