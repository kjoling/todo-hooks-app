import { useState } from "react";

export default function useToggle(initialVal = false) {
  const [toggleOn, setToggleOn] = useState(initialVal);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  return [toggleOn, handleToggle];
}
