import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTodos } from "../context/TodoContextProvaider";

const AddTodo = () => {
  const { createTodo } = useTodos();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !img.trim()) {
      console.log("Введите все данные");
      return;
    }
    let newTodo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    createTodo(newTodo);
    setName("");
    setPhone("");
    setImg("");
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

export default AddTodo;
