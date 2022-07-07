import { useState, useEffect } from "react";

const useCustomState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log("New value is", value);
  }, [value]);

  return [value, setValue];
};

export default useCustomState;
