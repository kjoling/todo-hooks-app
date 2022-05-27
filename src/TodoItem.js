import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useToggle from "./hooks/useToggle";
import useInputState from "./hooks/useInputState";

export default function TodoItem({
  todo,
  removeTodo,
  toggleCompleted,
  handleEdit,
}) {
  const [showForm, handleShowForm] = useToggle(false);
  const [value, handleValueChange, reset] = useInputState("");

  return (
    <ListItem>
      {showForm ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(todo.id, value);
            reset();
            handleShowForm();
          }}
        >
          <TextField
            value={value}
            onChange={(e) => handleValueChange(e)}
            margin="auto"
            label="Edit new todo"
            fullWidth
            required
          />
        </form>
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
        </>
      )}

      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
          <DeleteForeverIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={() => handleShowForm()}>
          <ModeEditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
