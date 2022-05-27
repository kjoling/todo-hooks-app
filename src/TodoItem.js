import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

export default function TodoItem({
  todo,
  removeTodo,
  toggleCompleted,
  handleEdit,
}) {
  const [showForm, handleShowForm] = useToggle(false);
  return (
    <ListItem>
      {showForm ? (
        <EditTodoForm
          handleEdit={handleEdit}
          todo={todo}
          handleShowForm={handleShowForm}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={todo.completed}
            onClick={() => toggleCompleted(todo.id)}
          />
          <ListItemText
            style={{
              wordBreak: "break-all",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            sx={{
              "& .MuiTypography-root": {
                width: "85%",
              },
            }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => handleShowForm()}>
              <ModeEditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
