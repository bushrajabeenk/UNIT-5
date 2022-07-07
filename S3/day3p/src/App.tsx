import "./App.css";
import {useTimeout} from "./hooks/useTimeout";

function App() {
  const toShow = useTimeout(5);

  if (!toShow) {
    return <div>Waiting for timer</div>;
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello</h1>
    </div>
  );
}

export default App;
