import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo, markCompleted, markIncomplete } from "../redux/actions";
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { Flex, Text, Button } from "@radix-ui/themes";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <Flex justify='between' className="border-b-2 py-2 gap-4">
      <Flex align='center'>
        <Text size="sm" className="mr-4 text-gray-500">
          {index + 1}.
        </Text>
        <Text size="sm" className={`mr-4 ${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.text}
        </Text>
      </Flex>
      <Flex gap='3'>
        <Button size="sm" color="blue"  onClick={() => dispatch(toggleTodo(index))}>
          {todo.completed ? <FaToggleOff color="white"/> : <FaToggleOn color="white"/>}
        </Button>
        <Button size="sm" color="red"  onClick={() => 
          window.confirm('Are you sure you want to delete this todo?')
          ? dispatch(removeTodo(index))
          : null
        }>
          <FaTrash color="white"/>
        </Button>
        {!todo.completed && (
          <Button size="sm" color="green" onClick={() => dispatch(markCompleted(index))}>
            <FaCheck color="white" />
          </Button>
        )}
        {todo.completed && (
          <Button size="sm" color="amber" onClick={() => dispatch(markIncomplete(index))}>
            <FaTimes color="white" />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default TodoItem;
