import React, { useState } from "react";

type TodoProps = {
  handleAdd: Function;
};

const TodoInput = ({ handleAdd }: TodoProps) => {
  const [value, setValue] = useState("");

  const click = () => {
    handleAdd(value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={click}>ADD</button>
      </div>
      <hr />
    </div>
  );
};

export default TodoInput;
