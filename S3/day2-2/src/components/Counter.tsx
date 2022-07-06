import { useState } from "react";

type CounterProps = {
  init: number;
};

const Counter = (props: CounterProps) => {
  const { init } = props; //default destructuring

  const [counter, setCounter] = useState(init);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
};

export default Counter;
