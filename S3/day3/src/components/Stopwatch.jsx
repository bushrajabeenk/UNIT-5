import React from "react";
import useStopwatch from "./../hooks/useStopwatch";

const Stopwatch = () => {
  const { time, start, pause, reset } = useStopwatch();

  return (
    <div>
      <h1>{time}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
