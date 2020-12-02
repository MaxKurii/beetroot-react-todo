import { nanoid } from 'nanoid';
import { convert } from '../lib/convert';
import { request } from './request';

async function fetchTodos() {
  const data = await request({
    url: "/todos",
    method: "GET"
  });
  return convert(data);
}

async function deleteTodo(id) {
  request({
    url: `/todos/${id}`,
    method: "DELETE"
  });
}

async function createTodo({ title, completed }) {
  const data = await request({
    url: '/todos',
    method: "POST",
    body: { title, completed },
  })

  return {
    ...data,
    id: nanoid()
  }
}

async function editTodo({ id, ...body }) {
  await request({
    body,
    url: `/todos/${id}`,
    method: "PATCH",
  })
}

const todosService = {
  fetchTodos,
  deleteTodo,
  createTodo,
  editTodo
}

export {
  todosService
}