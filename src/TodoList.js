import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  const todoItems = todos.map((todo) => (
    <>
      <ListItem>
        <ListItemText>
          <TodoItem todo={todo} />
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  ));
  return (
    <Paper>
      <List>{todoItems}</List>
    </Paper>
  );
}
