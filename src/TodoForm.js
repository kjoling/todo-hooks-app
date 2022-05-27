import React from "react";
import { Paper, TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
  const { addTodo } = props;
  const [value, handleValueChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0 ", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={(e) => handleValueChange(e)}
          margin="normal"
          label="Add new todo"
          fullWidth
          required
        />
      </form>
    </Paper>
  );
}
