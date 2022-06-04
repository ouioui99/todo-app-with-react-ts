import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
}

export const addTodoData = async (todo: Todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
}

export const updateTodoData = async (id: String, todo: Todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
