import React from "react";
import { Paper, TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
  const { addTodo } = props;
  const [value, handleValueChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: ".5rem 0", padding: "0 .5rem" }}>
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addTodo(value);
            reset();
          }
        }}
      >
        <TextField
          style={{ marginTop: "0.5rem" }}
          value={value}
          onChange={(e) => handleValueChange(e)}
          margin="normal"
          label="Add new todo"
          fullWidth
          required
          // minRows={1}
          // maxRows={4}
          // multiline
          autoFocus
          variant="standard"
        />
      </form>
    </Paper>
  );
}
