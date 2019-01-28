import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class CreateToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      dealsList: [{ value: "" }]
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    // debugger;
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    console.log("this.state.dealsList.value", this.state.dealsList.value);
    console.log("this.inputValue", this.state.inputValue);
    const { inputValue } = this.state;

    return (
      <Grid
        container
        spacing={40}
        direction={"row"}
        justify={"center"}
        className="todo_create"
      >
        <Grid item xs={12}>
          <form autoComplete="on">
            <span className="create_icon">+</span>
            <input
              id="create_input"
              name="create_input"
              className="create_input"
              type="text"
              autoComplete="true"
              value={inputValue}
              onChange={this.handleChangeInput}
            />
            <button className="create_btn">Create</button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default CreateToDoItem;
