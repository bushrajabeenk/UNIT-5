import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const fibo = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    return fibo(n - 1) + fibo(n - 2);
  };

  const calcFibo = () => {
    console.time("t1");
    let ret = fibo(Number(text));
    console.timeEnd("t1");
    console.log("nth Fibo", ret);
  };
  // output 292ms avg for 37

  // with useMemo
  // useMemo returns a value
  // const memoisedFibo = useMemo(() => fibo(Number(text)), [text]);
  // const calcFibo = () => {
  //   console.time("t1");
  //   let ret = memoisedFibo;
  //   console.timeEnd("t1");
  //   console.log("useMemo Fibo", ret);
  // };
  // output 0.003ms avg for 37

  // Hence with useMemo performance is optimized

  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={calcFibo}>Calculate</button>
    </div>
  );
}

export default App;


// useMemo - it returns a value, not function
// useCallback - it returns a callback function
