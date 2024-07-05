// Todo.view.jsx
import React from "react";
import { BsSearch, BsPlus } from "react-icons/bs";
import { Box, Button, Flex, Heading } from "@radix-ui/themes";
import FilterButtons from "./FilterButtons/FilterButtons";
import TodoList from "./TodoList/TodoList";

const Title = ({ title }) => {
  return (
    <Heading align="center" my="4">
      {title}
    </Heading>
  );
};

const TodoView = ({ newTodoText, setNewTodoText, handleAddTodoClick, searchTerm, handleSearchChange }) => {
  return (
    <Box maxWidth="75%" mx="auto" mt="8" p="4" className=" bg-gray-100 rounded">
      <Title title="Aplikasi Todo" />
      <Flex align="center" mb="4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Tambahkan Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <Button ml="4" p="2" color="navy" className="hover:bg-blue-600" onClick={handleAddTodoClick}>
          <BsPlus color="white" size={20} />
        </Button>
      </Flex>

      <Flex justify="between" align="center">
        <FilterButtons />
        <Flex align="center" my="4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Button ml="4" p="2" color="navy" className="hover:bg-blue-600">
            <BsSearch size={20} />
          </Button>
        </Flex>
      </Flex>

      <TodoList />
    </Box>
  );
};

export default TodoView;
