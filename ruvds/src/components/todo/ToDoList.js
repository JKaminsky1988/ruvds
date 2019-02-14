import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import CreateToDoItem from "./CreateToDoItem"

class ToDoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			dealsList: []
		}
	}

	handleTodoAdd = item => {
		let modifiedDealsList = [...this.state.dealsList, item]

		this.setState({
			dealsList: modifiedDealsList
		})
	}

	handleTodoCheck = idx => {
		let verifiabledDealsList = [...this.state.dealsList]
		if (verifiabledDealsList[idx]) {
			verifiabledDealsList[idx].isChecked = !verifiabledDealsList[idx].isChecked

			this.setState({
				dealsList: verifiabledDealsList
			})
		}
	}

	handleTodoDelete = idx => {
		let deleteItem = () => {
			let updatedDealsList = [...this.state.dealsList]
			updatedDealsList.splice(idx, 1)

			this.setState({
				dealsList: updatedDealsList
			})
		}
		setTimeout(deleteItem, 2000)
		this.setState({
			dealsList: this.state.dealsList
		})
	}

	render() {
		return (
			<Grid item xs={11} className="todo_list_bl">
				<Grid container spacing={40} direction={"row"} justify={"center"}>
					<CreateToDoItem handleTodoAdd={this.handleTodoAdd} />
					<Grid item xs={12} sm={8}>
						<Paper className="paper_wrap">
							<List className="todo_list">
								{this.state.dealsList.length === 0 && (
									<ListItem className="empty_list">nothing to do</ListItem>
								)}
								{this.state.dealsList.map((deal, idx) => (
									<ListItem key={idx} className="todo_item">
										<label
											htmlFor={`checked-${idx}`}
											className={deal.isChecked === true ? "checked_deal" : ""}
										>
											<input
												type="checkbox"
												onChange={e => {
													this.handleTodoCheck(idx)
													this.handleTodoDelete(idx)
												}}
												id={`checked-${idx}`}
												checked={deal.isChecked}
											/>
											{deal.name} {deal.priority}
										</label>
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
