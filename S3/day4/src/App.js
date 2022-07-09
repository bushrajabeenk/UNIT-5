import "./App.css";
import Counter from "./components/Counter";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="App">
      <Counter
        label="Counter X"
        count={count}
        increment={() => increment(1)}
        decrement={() => decrement(1)}
      />
    </div>
  );
}

export default App;
