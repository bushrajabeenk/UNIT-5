import "./App.css";
import Counter from "./components/Counter";
import useCounter from "./hooks/useCounter";

function App() {
  const { count: c1, increment: i1, decrement: d1 } = useCounter(0);
  const { count: c2, increment: i2, decrement: d2 } = useCounter(0);

  return (
    <div className="App">
      <div>
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
      </div>
    </div>
  );
}

export default App;
