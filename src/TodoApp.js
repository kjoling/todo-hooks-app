import React, { useState } from "react";
import TodoList from "./TodoList";
import { styled } from "@mui/material/styles";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Todo() {
  const initialTodos = [
    { id: 1, task: "clean cat", completed: false },
    { id: 2, task: "brush computer", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {};

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 8 }}
        style={{ justifyContent: "center", justifyItems: "center" }}
        wrap="nowrap"
      >
        <Grid item xs={2} sm={4} md={4} style={{ marginTop: "1rem" }}>
          <Item>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleCompleted={toggleCompleted}
            />
          </Item>
        </Grid>
      </Grid>
    </Paper>
  );
}

//Todo app - manage state
//Todo form - input new todo
//Todo list
//  - Todo Items - id, task, completed(y/n) - create, read, update, delete
