import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"

// import CreateToDoItem from "../components/todo/CreateToDoItem"
import ToDoList from "../components/todo/ToDoList"

class Main extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <ToDoList />
      </Grid>
    )
  }
}

export default Main
