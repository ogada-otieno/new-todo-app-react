import React, { useState, useEffect, useContext } from "react";
import TodoList from "../components/TodoList";
// import axios from "axios";
import { TodoContext } from "../context/TodosContext";

function Home() {
  const [todos, setTodos] = useContext(TodoContext);

  //   new todo state
  const [newTodo, setNewTodo] = useState("");

  // handle input change
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // function to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: newTodo,
      status: false,
    };
    console.log(newTask);
    setTodos([...todos, newTask]);
  };

  return (
    <div
      style={{
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      {/* <h1>{newTodo}</h1> */}
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="newTodo"
          value={newTodo}
          type="text"
          placeholder="Enter new todo"
        />
        <button type="submit">Add todo</button>
      </form>
      {todos.length > 0 ? <TodoList todos={todos} /> : <p>No tasks</p>}
    </div>
  );
}

export default Home;
