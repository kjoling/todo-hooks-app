import React from "react";
import TodoItem from "./TodoItem";
import { Grid, List, Divider } from "@mui/material";

export default function TodoList({
  todos,
  removeTodo,
  toggleCompleted,
  handleEdit,
}) {
  const todoItems = todos.map((todo, i) => (
    <Grid item key={todo.id}>
      <TodoItem
        todo={todo}
        completed={todo.completed}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        handleEdit={handleEdit}
      />
      {i < todos.length - 1 && <Divider />}
    </Grid>
  ));
  if (todos.length > 0) return <List>{todoItems}</List>;
}
