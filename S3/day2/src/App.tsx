import React from "react";
import "./App.css";
// import Button from "./Button";
// import { FaBeer } from "react-icons/fa";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
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
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
