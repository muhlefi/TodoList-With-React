import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { Box ,Em } from "@radix-ui/themes";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  console.log('Filtered Todos:', filteredTodos);

  return (
    <Box as="ul" justify='beetwen'>
      <Box as="li" my='2' className="text-sm"> <Em>All Your Notes Here...</Em> </Box>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </Box>
  );
};

export default TodoList;
