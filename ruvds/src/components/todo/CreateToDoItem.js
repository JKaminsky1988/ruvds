import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { Add } from "@material-ui/icons"

class CreateToDoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      dealsList: []
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  getInputValue = () => {
    this.state.dealsList.push(this.state.inputValue)
  }

  handleChangeInput = e => {
    this.setState({
      inputValue: e.target.value
    })
    console.log("***** handleChangeInput *****")
  }

  render() {
    const { inputValue, dealsList } = this.props

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
            <Grid container spacing={0} direction={"row"} justify={"center"}>
              <Grid item xs={10}>
                <Input
                  id="create_input"
                  name="create_input"
                  className="create_input"
                  type="text"
                  autoComplete="false"
                  value={inputValue}
                  variant="standard"
                  onChange={this.handleChangeInput}
                  startAdornment={
                    <InputAdornment position="start">
                      <Add />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <button
                  type="button"
                  className="create_btn"
                  onClick={this.getInputValue}
                >
                  Create
                </button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default CreateToDoItem
