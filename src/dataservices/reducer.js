// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

// Initial state
const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  filter: 'ALL',
  searchTerm: '',
};

// Reducer function
const todoReducer = (state = initialState, action) => {
  let updatedTodos;

  switch (action.type) {
    case ADD_TODO:
      updatedTodos = [...state.todos, { text: action.payload.text, completed: false }];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case TOGGLE_TODO:
      updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case REMOVE_TODO:
      updatedTodos = state.todos.filter((todo, index) => index !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case MARK_COMPLETED:
      updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, completed: true } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case MARK_INCOMPLETE:
      updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, completed: false } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      updatedTodos = state.todos.map((todo) => ({ ...todo, completed: true }));
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
