import React from "react";
import TodoItem from "./TodoItem";
import { Grid, List, Divider } from "@mui/material";

export default function TodoList(props) {
  const { todos, removeTodo, toggleCompleted } = props;

  const todoItems = todos.map((todo) => (
    <Grid item key={todo.id}>
      <TodoItem
        todo={todo}
        completed={todo.completed}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
      <Divider />
    </Grid>
  ));
  return <List>{todoItems}</List>;
}
