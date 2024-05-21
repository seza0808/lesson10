import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import axios from "axios";
export const todoContext = createContext();
export const useTodos = () => useContext(todoContext);

const TodoContextProvaider = ({ children }) => {
  const INIT_STATE = {
    todos: [],
    oneTodo: {}, //!сотояние
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return { ...state, todos: action.payload };
      case "GET_ONE_TODO":
        return { ...state, oneTodo: action.payload };
    }
    //state ;todos и OneProduct //!action это обьект type и payload ключ
  };
  //!CRATE
  const createTodo = async (todo) => {
    await axios.post(API, todo);
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getTodos = async () => {
    const { data } = await axios(API);
    //!
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };
  //! DELETE
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };
  //   !GETONETODO
  const getOneTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: data,
    });
  };
  //!EDIT
  const editTodo = async (id, newTodo) => {
    await axios.patch(`${API}/${id}`, newTodo);
  };
  const values = {
    createTodo,
    getTodos,
    todos: state.todos,
    deleteTodo,
    getOneTodo,
    oneTodo: state.oneTodo,
    editTodo,
  };
  console.log(state.todos);
  return (
    <div>
      <todoContext.Provider value={values}>{children}</todoContext.Provider>
    </div>
  );
};

export default TodoContextProvaider;
