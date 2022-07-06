import React from "react";

type TodoListProps = {
  data: any[];
};

const TodoList = ({ data }: TodoListProps) => {
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        {data.map((todo) => {
          <p key={todo.id}>{todo.value}</p>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
