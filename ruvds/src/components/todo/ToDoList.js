import React, { Component, Fragment } from 'react';
import todo_list from "../../fixtures/todo_list.js"

class ToDoList extends Component {
  render() {
    return (
      <div className="todo_list">
        {todo_list.map((item, idx) => (
          <div className="todo_item" key={idx}>
            <label className="todo_label">
              <input type="checkbox" className="todo_checkbox custom_checkbox"/>
              <span className="todo_text">{item.name}</span>
            </label>
          </div>
          ))}
      </div>
    );
  }
}

export default ToDoList;