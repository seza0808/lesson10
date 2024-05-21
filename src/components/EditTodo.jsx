import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContextProvaider";
import { Button, TextField } from "@mui/material";

const EditTodo = () => {
  const { id } = useParams();
  const { getOneTodo, oneTodo, editTodo } = useTodos();
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setName(oneTodo.todoName);
      setPhone(oneTodo.todoPhone);
      setImg(oneTodo.todoImg);
    }
  }, [oneTodo]);
  const navigate = useNavigate();
  const [name, setName] = useState(oneTodo.todoName);
  const [phone, setPhone] = useState(oneTodo.todoPhone);
  const [img, setImg] = useState(oneTodo.todoImg);
  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !img.trim()) {
      console.log("Введите данные!");
      return;
    }
    let newTodo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    editTodo(id, newTodo);
    navigate("/");
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="name"
        variant="outlined"
        value={name}
      />
      <TextField
        onChange={(e) => setPhone(e.target.value)}
        id="outlined-basic"
        label="phone"
        variant="outlined"
        value={phone}
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="img"
        variant="outlined"
        value={img}
      />
      <Button onClick={handleClick} variant="contained">
        Add Todo
      </Button>
    </div>
  );
};

export default EditTodo;
