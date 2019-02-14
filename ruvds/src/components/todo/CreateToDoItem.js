import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { Add, Grade } from "@material-ui/icons"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"

import { PRIORITY_STANDART, PRIORITY_HIGH } from "../../fixtures/todoConst"

class CreateToDoItem extends Component {
  state = {
    itemTodo: {
      name: "",
      priority: PRIORITY_STANDART,
      isEdit: false,
      isChecked: false
    }
  }

  handleChangeValue = e => {
    let itemTodo = { ...this.state.itemTodo }
    itemTodo.name = e.target.value
    this.setState({
      itemTodo: itemTodo
    })
  }

  handleChangePriority = e => {
    let itemTodo = { ...this.state.itemTodo }
    itemTodo.priority = e.target.value
    this.setState({
      itemTodo: itemTodo
    })
  }

  render() {
    return (
      <Grid item xs={12} className="todo_create_item">
        <form autoComplete="on">
          <Grid container spacing={16} direction={"row"} justify={"center"}>
            <Grid item xs={12} sm={5}>
              <Input
                id="create_input"
                name="create_input"
                className="create_input"
                type="text"
                value={this.state.itemTodo.name}
                variant="standard"
                autoComplete="off"
                onChange={this.handleChangeValue}
                startAdornment={
                  <InputAdornment position="start">
                    <Add />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Select
                className="priority_select"
                variant="standard"
                value={this.state.itemTodo.priority}
                name="priority"
                onChange={this.handleChangePriority}
              >
                <MenuItem
                  className="menu_item"
                  value={PRIORITY_STANDART}
                  selected={true}
                >
                  standart
                </MenuItem>
                <MenuItem className="menu_item" value={PRIORITY_HIGH}>
                  <span className="icon_bl">
                    <Grade />
                  </span>
                  high
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2} className="create_btn_bl">
              <button
                type="button"
                className="create_btn"
                onClick={e => this.props.handleTodoAdd(this.state.itemTodo)}
              >
                Create
              </button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    )
  }
}

export default CreateToDoItem
