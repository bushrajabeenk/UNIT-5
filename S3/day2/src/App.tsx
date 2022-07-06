import React from "react";
import "./App.css";
import Button from "./Button";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div>
        <Button color="red" leftIcon={<FaBeer />} rightIcon={<FaBeer />}>
          Hello
        </Button>
      </div>
    </div>
  );
}

export default App;
