import { useState } from "react";

type CounterProps = {
  init: number;
};

const Counter = (props: CounterProps) => {
  const { init } = props;

  const [counter, setCounter] = useState(init);

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
};

export default Counter;
