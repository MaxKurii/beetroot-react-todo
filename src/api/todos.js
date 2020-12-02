import { convert } from '../lib/convert';

async function fetchTodos() {
  // return new Promise(resolve => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/', {
  //     method: "GET",
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       const items = convert(data);
  //       resolve(items);
  //     })
  // })

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: "GET",
  })
  const data = await response.json();
  return convert(data);
}

async function deleteTodo(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  })
  const data = await response.json();
  console.log(data);
}

const todosService = {
  fetchTodos,
  deleteTodo
}

export {
  todosService
}