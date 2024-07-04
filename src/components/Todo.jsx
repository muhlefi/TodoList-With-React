// Todo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";

const Title = ({ title }) => {
  return (
    <Heading align="center" my="4">
      {title}
    </Heading>
  );
};
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
    <Box maxWidth="75%" mx="auto" mt="8" p="4" className=" bg-gray-100 rounded">
      <Title title="Aplikasi Todo" />
      <Flex align='center' mb='4'>
        <input id="addTodoInput" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="Tambahkan Todo" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <Button ml='4' p='2' color="navy"  className="hover:bg-blue-600" onClick={handleAddTodoClick}>
          <BsPlus color='white' size={20} />
        </Button>
      </Flex>

      <Flex justify="between" align="center">
        <FilterButtons />
        <Flex align='center' my='4'>
        <input className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="Search Todos" value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} />
          <Button ml='4' p='2' color="navy"  className="hover:bg-blue-600">
            <BsSearch size={20} />
          </Button>
        </Flex>
      </Flex>

      <TodoList />
    </Box>
  );
};

export default Todo;
