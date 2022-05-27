import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos || []);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  return {
    todos,
    addTodo: addTodo,
    removeTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    toggleCompleted: (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (id, updatedTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask, completed: false } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
