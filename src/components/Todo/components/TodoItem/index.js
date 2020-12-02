import { Checkbox } from "../../../shared/Checkbox";
import { Button } from "../../../shared/Button";
import "./style.scss";

function TodoItem(props) {
  const { todo, handleDelete, handleUpdate, handleSelect } = props;

  return (
    <li className="todo-item">
      <Checkbox
        checked={todo.completed}
        onChange={() => handleUpdate({
          ...todo,
          completed: !todo.completed
        })}
      />

      <p className={`matter-body1 todo-item__descr ${todo.completed && 'todo-item__descr--completed'}`}>
        {todo.title}
      </p>

      <Button
        type="text"
        onClick={() => handleSelect(todo)}
      >
        Edit
      </Button>

      <Button
        type="text"
        color="error"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </Button>
    </li>
  )
}

export {
  TodoItem
}