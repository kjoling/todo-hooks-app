import React, { useState } from "react";
import TodoList from "./TodoList";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";

export default function Todo() {
  const initialTodos = [
    { id: 1, task: "clean cat", completed: false },
    { id: 2, task: "brush computer", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} setTodos={setTodos} />
    </Paper>
  );
}

//Todo app - manage state
//Todo form - input new todo
//Todo list
//  - Todo Items - id, task, completed(y/n) - create, read, update, delete
