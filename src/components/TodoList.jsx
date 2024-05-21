import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContextProvaider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos } = useContext(todoContext);
  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  return (
    <div>
      {todos.map((elem) => (
        <TodoItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default TodoList;
