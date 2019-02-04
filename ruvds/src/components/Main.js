import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"

import CreateToDoItem from "./todo/CreateToDoItem.js"
import ToDoList from "./todo/ToDoList.js"

class Main extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <Grid
          container
          spacing={40}
          direction="row"
          justify="center"
          className="main"
        >
          <Grid item xs={12}>
            <CreateToDoItem />
          </Grid>
          <Grid item xs={12}>
            <ToDoList />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Main
