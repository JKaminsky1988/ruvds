import React, { Component } from "react";

import todo_list from "../../fixtures/todo_list.js";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <div className="todo_item" key={idx}>
        <label className="todo_label">
          <input type="checkbox" className="todo_checkbox custom_checkbox" />
          <span className="todo_text">{item.name}</span>
        </label>
      </div>
    );
  }
}

export default ToDoItem;
