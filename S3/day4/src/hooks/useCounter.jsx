import { useState } from "react";

const useCounter = (init) => {
  const [count, setCount] = useState(init);

  const increment = (incVal) => {
    setCount((count) => count + incVal);
  };

  const decrement = (decVal) => {
    setCount((count) => count - decVal);
  };

  return { count, increment, decrement };
};

export default useCounter;
