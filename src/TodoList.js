import React from "react";
import TodoItem from "./TodoItem";
import { Grid, List, Divider } from "@mui/material";

export default function TodoList({
  todos,
  removeTodo,
  toggleCompleted,
  handleEdit,
}) {
  const todoItems = todos.map((todo) => (
    <Grid item key={todo.id}>
      <TodoItem
        todo={todo}
        completed={todo.completed}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        handleEdit={handleEdit}
      />
      <Divider />
    </Grid>
  ));
  return <List>{todoItems}</List>;
}
