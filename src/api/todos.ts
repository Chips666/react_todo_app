import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 3432;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodos = (todo: Todo) => {
  return client.post<Todo>('/todos', todo);
};

export const deleteTodos = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodos = (todoId: number, todo: Partial<Todo>) => {
  return client.patch<Todo>(`/todos/${todoId}`, todo);
};
