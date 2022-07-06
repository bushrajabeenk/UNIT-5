import { useState, useEffect } from "react";
import "./App.css";
// import Button from "./Button";
// import { FaBeer } from "react-icons/fa";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios, { AxiosResponse } from "axios";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (newTodo: string) => {
    const payload = { text: newTodo, isCompleted: false };
    axios.post("http://localhost:8080/todos", payload).then(getTodos);
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((response: AxiosResponse<Todo[]>) => {
        const { data } = response;
        console.log(data);
        setTodos(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      {/* <div>
        <div>
          <Button color="red" leftIcon={<FaBeer />} rightIcon={<FaBeer />}>
            Hello
          </Button>
        </div>
        <br />
        <div>
          <Button color="blue" leftIcon={<FaBeer />}>
            Hello
          </Button>
        </div>
        <br />
        <div>
          <Button color="green" rightIcon={<FaBeer />}>
            Hello
          </Button>
        </div>
      </div> */}

      <div>
        <TodoInput handleAdd={handleAdd} />
        <TodoList data={todos} />
      </div>
    </div>
  );
}

export default App;
