import { Todo } from "../App";

type TodoListProps = {
  data: Todo[];
};

const TodoList = ({ data }: TodoListProps) => {
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        {data.map((todo) => {
          return <p key={todo.id}>{todo.text}</p>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
