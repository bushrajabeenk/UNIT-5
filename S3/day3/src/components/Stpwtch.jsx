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
    // keep running if we remove the App itself from UI i.e
    // if the component is unmounted before the setInterval/setTimeout
    // time runs out. For example in the above case, it is given 1000
    // if the component is unmounted, ie if the component App
    // is removed from the UI before the completion of 1000s
    // ie if we remove App itself (which in turn contains Timer.jsx as component)
    // then we don't want the timer to keep running, because the App
    // itself is removed from UI, we don't want the timer to keep running
    // so to stop the timer from running in such cases
    // we use cleanup function
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
