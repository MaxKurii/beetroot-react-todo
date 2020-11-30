import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import { Loader } from '../shared/Loader';
import { Switch } from '../shared/Switch';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { exclude } from './lib/exclude';
// import * as api from '../../api/todos';

import "./style.scss";

function Todo() {
  const [todos, setTodos] = useState({})
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    // fetchTodos();
    fetch('https://jsonplaceholder.typicode.com/todos/',{
      method:"GET",
      
    })
    .then(response=>{
      return response.json()

    })
    .then(data=>{
      console.log(data);
    })
    .finally(()=>setLoading(false))
  }, []);

  useEffect(() => {
    const items = Object.values(todos);

    if (!isCompleted) {
      setFilteredTodos(
        Object.values(items)
      )
    } else {
      setFilteredTodos(
        items.filter(item => item.completed)
      )
    }
  }, [isCompleted, todos])

  // const fetchTodos = async () => {
  //   setLoading(true)
  //   const response = await api.fetchTodos()
  //   setTodos(response);
  //   setLoading(false)
  // }

  const createTodo = (title) => {
    const todo = {
      title,
      id: nanoid(),
      completed: false,
    };

    setTodos({
      ...todos,
      [todo.id]: todo
    });
  }

  const deleteTodo = (id) => {
    const filteredTodos = exclude({
      key: id,
      source: todos
    });

    setTodos(filteredTodos);
  }

  const updateTodo = (todo) => {
    setTodos({
      ...todos,
      [todo.id]: todo
    });

    if (selectedTodo) {
      setSelectedTodo(null);
    }
  }

  return (
    <div className="todo">
      {isLoading && <Loader className="todo__loader" />}
      <div className="todo__container">
        {
          !isLoading &&
          <>
            <header className="todo__header">
              <Switch
                checked={isCompleted}
                onChange={() => setCompleted(!isCompleted)}
              >
                {!isCompleted ? 'All' : 'Completed todos'}
              </Switch>
            </header>
            {
              filteredTodos.length > 0 ?
                <ul className="todo__list">
                  {
                    filteredTodos.map(todo =>
                      <TodoItem
                        handleDelete={deleteTodo}
                        handleUpdate={updateTodo}
                        handleSelect={setSelectedTodo}
                        todo={todo}
                        key={todo.id}
                      />)
                  }
                </ul> :
                <p className="matter-h5 todo__empty-message">You have no any todos 🤔</p>
            }
          </>
        }
      </div>

      <TodoForm
        handleCreate={createTodo}
        handleUpdate={updateTodo}
        selectedTodo={selectedTodo}
      />
    </div>
  )
}

export {
  Todo
}