import { Button } from "@mui/material";
import React from "react";
import { useTodos } from "../context/TodoContextProvaider";
import { Link } from "react-router-dom";

const TodoItem = ({ todoName, todoPhone, todoImg, id }) => {
  const { deleteTodo } = useTodos();
  return (
    <div>
      <img width={200} src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h4>{todoPhone}</h4>
      <Button onClick={() => deleteTodo(id)} variant="contained" color="error">
        DELETE
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained">Edit</Button>
      </Link>
    </div>
  );
};

export default TodoItem;
