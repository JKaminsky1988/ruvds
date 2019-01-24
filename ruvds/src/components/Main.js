import React, { Component, Fragment } from 'react'
import ToDoList from "./todo/ToDoList.js"

class Main extends Component {
  render() {
  const date = new Date()
    return (
      <div className="main">
        <ToDoList />
      </div>
    );
  }
}

export default Main;