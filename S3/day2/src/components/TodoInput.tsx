import React, { useState } from "react";

type TodoProps = {
  handleAdd: Function;
};

const TodoInput = ({ handleAdd }: TodoProps) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleAdd(newTodo)}>ADD</button>
      </div>
      <hr />
    </div>
  );
};

export default TodoInput;
