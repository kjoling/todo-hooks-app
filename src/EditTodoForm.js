import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField, ListItemSecondaryAction } from "@mui/material";
import { IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { autofocus } from "./hooks/helpers";

export default function EditTodoForm({ todo, handleEdit, handleShowForm }) {
  const [value, handleValueChange] = useInputState(todo.task);

  return (
    <>
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleEdit(todo.id, value);
            handleShowForm();
          }
        }}
        style={{ width: "85%", marginLeft: "1rem" }}
      >
        <TextField
          value={value}
          onChange={(e) => handleValueChange(e)}
          margin="none"
          label="Edit new todo"
          fullWidth
          required
          multiline
          minRows={1}
          maxRows={2}
          autoFocus
          onFocus={autofocus}
          variant="standard"
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
