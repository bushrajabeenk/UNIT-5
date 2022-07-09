import { useMemo, useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import useCounter from "./hooks/useCounter";

function App() {
  // const { count: c1, increment: i1, decrement: d1 } = useCounter(0);
  // const { count: c2, increment: i2, decrement: d2 } = useCounter(0);

  const [ans, setAns] = useState();
  const [val, setVal] = useState(0);

  const fibo = (n) => {
    if (n <= 1) return n;
    return fibo(n - 1) + fibo(n - 2);
  };

  const memoisedValue = useMemo(() => fibo(val), [val]);

  const handleClick = () => {
    let res = memoisedValue;
    // let res = fibo(val);
    console.log(res);
    setAns(res);
  };

  return (
    <div className="App">
      {/* <div>
        <Counter
          label="Counter X"
          count={c1}
          increment={() => i1(1)}
          decrement={() => d1(1)}
        />
      </div>
      <div>
        <Counter
          label="Counter Y"
          count={c2}
          increment={() => i2(10)}
          decrement={() => d2(20)}
        />
      </div> */}
      <h2>{ans}</h2>
      <div>
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={handleClick}>Calculate Fibonacci</button>
      </div>
    </div>
  );
}

export default App;
