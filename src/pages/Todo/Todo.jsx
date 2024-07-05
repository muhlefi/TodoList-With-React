// Todo.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../../dataservices/actions";
import TodoView from "./Todo.view";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <TodoView
      newTodoText={newTodoText}
      setNewTodoText={setNewTodoText}
      handleAddTodoClick={handleAddTodoClick}
      searchTerm={searchTerm}
      handleSearchChange={handleSearchChange}
    />
  );
};

export default Todo;
