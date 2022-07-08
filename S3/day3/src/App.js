import "./App.css";
// import axios from "axios";
// import Stopwatch from "./components/Stopwatch";
import Stpwtch from "./components/Stpwtch";
// import useAPI from "./hooks/useAPI";

// const getData = async () => {
//   let r = await axios.get("http://localhost:9090/data");
//   return r.data;
// };

// const getTodos = async () => {
//   let r = await axios.get("http://localhost:9090/todos");
//   return r.data;
// };

function App() {
  // const { loading, data, error, refresh } = useAPI(getData);
  // const { data: todosData } = useAPI(getTodos);

  return (
    <div className="App">
      {/* <Stopwatch /> */}
      <Stpwtch />
      {/* <h3>
        {" "}
        Data <button onClick={refresh}>Refresh</button>
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {!loading &&
          !error &&
          data.map((d, index) => <div key={index}>{d}</div>)}
      </h3>

      <h3>Todos</h3>
      {todosData.map((d, index) => (
        <div key={index}>{d}</div>
      ))} */}
    </div>
  );
}

export default App;
