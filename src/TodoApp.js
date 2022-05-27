import React from "react";
import TodoList from "./TodoList";
import { styled } from "@mui/material/styles";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@mui/material";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Todo() {
  const initialTodos = JSON.parse(localStorage.getItem("todos"));
  const { todos, removeTodo, addTodo, toggleCompleted, editTodo } =
    useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: "0",
        margin: "0",
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
      >
        <Grid item xs={2} sm={4} md={4} style={{ marginTop: "1rem" }}>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 && (
            <Item>
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleCompleted={toggleCompleted}
                handleEdit={editTodo}
              />
            </Item>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

//Todo app - manage state
//Todo form - input new todo
//Todo list
//  - Todo Items - id, task, completed(y/n) - create, read, update, delete
