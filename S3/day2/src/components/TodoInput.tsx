import React from "react";

const TodoInput = () => {
  const handleChange = () => {};

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter todo" onChange={handleChange} />
      </div>
      <div>
        <button>ADD</button>
      </div>
      <hr />
    </div>
  );
};

export default TodoInput;
