import { useState, useRef, useEffect } from "react";
import useCustomState from "./useCustomState";

const useStopwatch = () => {
  const timerId = useRef();
  //   const [time, setTime] = useState(0);
  const [time, setTime] = useCustomState(0);

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
    // cleanup
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return { time, start, pause, reset };
};

export default useStopwatch;
