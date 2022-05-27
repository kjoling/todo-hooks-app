import { useState } from "react";

export default function useInputState(initialVal) {
  const [input, setInput] = useState(initialVal);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const reset = () => {
    setInput("");
  };

  return [input, handleChange, reset];
}
