import React, { Component, Fragment } from "react"

// import CreateToDoItem from "../components/todo/CreateToDoItem"
import ToDoList from "../components/todo/ToDoList"
class Main extends Component {
	render() {
		return (
			<Fragment>
				<ToDoList />
			</Fragment>
		)
	}
}

export default Main
