import React, { useState, useEffect } from "react";
import "./App.css";
// import Button from "./Button";
// import { FaBeer } from "react-icons/fa";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { postTodo, getTodos, Todo } from "./actions";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (value: string) => {
    postTodo({
      value,
      isCompleted: false,
    }).then((newTodo) => {
      setTodos([...todos, newTodo]);
    });
  };

  useEffect(() => {
    getTodos().then((d) => setTodos(d));
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
