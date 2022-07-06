import axios, { AxiosResponse } from "axios";

type inputTodo = {
  value: string;
  isCompleted: boolean;
};

export type Todo = {
  id: string;
  value: string;
  isCompleted: boolean;
};

// export const getTodos = async () => {
//   let res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todos");
//   return res.data;
// };

export const postTodo = async (newTodo: inputTodo) => {
  let res: AxiosResponse<Todo> = await axios.post(
    "http://localhost:8080/todos",
    newTodo
  );
  return res.data;
};
