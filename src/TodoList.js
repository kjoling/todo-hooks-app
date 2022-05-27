import React from "react";
import TodoItem from "./TodoItem";
import { Grid, List, Divider } from "@mui/material";

export default function TodoList(props) {
  const { todos } = props;

  const todoItems = todos.map((todo) => (
    <Grid item key={todo.id}>
      <TodoItem todo={todo} complete={todo.completed} />
      <Divider />
    </Grid>
  ));
  return <List>{todoItems}</List>;
}
