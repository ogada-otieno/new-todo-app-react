import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  //function to fetch todos => GET => https://jsonplaceholder.typicode.com/todos

  // let url = process.env.REACT_APP_API_URL;

  const fetchTodos = () => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        // console.log(response.data);
        const fetchedTodos = response.data;
        setTodos(fetchedTodos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
