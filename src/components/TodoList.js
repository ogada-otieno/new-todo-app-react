import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((item, index) => (
        <TodoItem key={index} todo={item} />
      ))}
    </div>
  );
}

export default TodoList;
