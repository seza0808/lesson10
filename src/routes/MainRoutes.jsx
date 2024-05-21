import React from "react";
import AddTodo from "../components/AddTodo";
import { Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import EditTodo from "../components/EditTodo";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddTodo />} />
      <Route path="/edit/:id" element={<EditTodo />} />
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
};

export default MainRoutes;
