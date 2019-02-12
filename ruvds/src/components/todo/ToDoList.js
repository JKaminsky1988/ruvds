import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { Add } from "@material-ui/icons"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

class ToDoList extends Component {
	state = {
		valueInput: "",
		dealsList: []
	}

	// если значение инпута НЕ пустое
	// перезаписываю значение списка на старые значения + новое значение
	// очищаю значение инпута
	addItemToList = () => {
		console.log("dealsList", this.state.dealsList)
		if (this.state.valueInput) {
			this.setState({
				dealsList: [...this.state.dealsList, this.state.valueInput],
				valueInput: "",
				isChecked: false
			})
		}
		console.log("dealsList", this.state.dealsList)
	}

	// получаю введенное значение инпута по ивенту (клик)
	handleChangeInput = e => {
		this.setState({
			valueInput: e.target.value
		})
	}

	handleCheckedDeal = e => {
		this.setState({
			isChecked: true
		})
	}

	render() {
		return (
			<Grid item xs={12} className="todo_list_bl">
				<Grid container spacing={40} direction={"row"} justify={"center"}>
					{/*CREATE BLOCK*/}
					<Grid item xs={12} className="todo_create_item">
						<form autoComplete="on">
							<Grid container spacing={0} direction={"row"} justify={"center"}>
								<Grid item xs={10}>
									<Input
										id="create_input"
										name="create_input"
										className="create_input"
										type="text"
										value={this.state.valueInput}
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
										onClick={this.addItemToList}
									>
										Create
									</button>
								</Grid>
							</Grid>
						</form>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Paper className="paper_wrap">
							<List className="todo_list">
								<ListItem className="empty_list">
									{this.state.dealsList.length === 0 && "nothing to do"}
								</ListItem>
								{this.state.dealsList.map((deal, idx) => (
									<ListItem
										key={idx}
										className={
											"todo_item" + (this.state.isChecked && " checked")
										}
									>
										<input type="checkbox" onClick={this.handleCheckedDeal} />
										{deal}
									</ListItem>
								))}
							</List>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}

export default ToDoList
