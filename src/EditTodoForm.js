import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField, ListItemSecondaryAction } from "@mui/material";
import { IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function EditTodoForm({ todo, handleEdit, handleShowForm }) {
  const [value, handleValueChange, reset] = useInputState(todo.task);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(todo.id, value);
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
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit" onClick={() => handleShowForm()}>
          <ModeEditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}
