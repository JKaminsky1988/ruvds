import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Footer extends Component {
  render() {
    return (
      <Grid item xs={12} className="footer">
        <p>footer content</p>
      </Grid>
    );
  }
}

export default Footer;
