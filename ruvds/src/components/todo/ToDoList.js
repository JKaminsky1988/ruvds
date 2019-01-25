import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import todo_list from "../../fixtures/todo_list.js";

class ToDoList extends Component {
  render() {
    return (
      <Grid item xs={6} className="todo_list">
        {/* {todo_list.map((item, idx) => (

          ))}*/}
      </Grid>
    );
  }
}

export default ToDoList;
