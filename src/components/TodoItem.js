import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-container">
      <p>
        <b>{props.todo.id}:</b> {props.todo.title}
      </p>
      {/* <p>{props.todo.description}</p> */}
      <button className="check-btn">&#x2713;</button>
      <button className="cross-btn">&#x2717;</button>
    </div>
  );
}

export default TodoItem;
