import React from "react";

const Counter = ({ label, count, increment, decrement }) => {
  return (
    <div>
      <h2>
        {label}: {count}
      </h2>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
};

export default Counter;
