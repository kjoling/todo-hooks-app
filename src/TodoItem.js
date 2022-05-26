import React from "react";

export default function TodoItem(props) {
  const { todo } = props;
  return <div>{todo.task}</div>;
}
