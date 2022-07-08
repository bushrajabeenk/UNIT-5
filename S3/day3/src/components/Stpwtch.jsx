import { useState, useRef, useEffect } from "react";

const Stpwtch = () => {
  const timerId = useRef();
  // useRef provides .current object
  console.log(timerId)

  const [time, setTime] = useState(0);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setTime(0);
  };

  useEffect(() => {
    // cleanup function is used when we dont want the timer to 
    // keep running if we remove the App itself from UI
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div>
      <h1>{time}</h1>
      <div>
        <button onClick={start} disabled={time > 0}>
          Start
        </button>
        <button onClick={pause} disabled={!timerId.current}>
          Pause
        </button>
        <button onClick={reset} disabled={!timerId.current}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stpwtch;
