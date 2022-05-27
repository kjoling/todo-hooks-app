import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TodoItem(props) {
  const { todo, removeTodo } = props;

  const handleDelete = (id) => {
    removeTodo(id);
  };
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={todo.completed} />
      <ListItemText style={{ wordBreak: "break-all", width: "80% " }}>
        {todo.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => handleDelete(todo.id)}>
          <DeleteForeverIcon />
        </IconButton>
        <IconButton>
          <ModeEditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
