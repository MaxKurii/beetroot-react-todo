import { useEffect, useState } from 'react';

import { Button } from '../../../shared/Button';
import { Input } from '../../../shared/Input';

import "./style.scss";

function TodoForm(props) {
  const { handleCreate, handleUpdate, selectedTodo } = props;

  const [hasError, setError] = useState(false);
  const [value, setValue] = useState(
    selectedTodo ? selectedTodo.description : ''
  );

  useEffect(() => {
    if (selectedTodo !== null) {
      setValue(selectedTodo.description);
    }
  }, [selectedTodo])

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length === 0) {
      setError(true);
      return;
    }

    if (selectedTodo) {
      handleUpdate({
        ...selectedTodo,
        description: value
      });
    } else {
      handleCreate(value);
    }

    setValue('');
  }

  const handleInput = e => {
    if (hasError) {
      setError(false);
    }
    setValue(e.target.value);
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <Input
        className="todo-form__textfield"
        name="todo"
        value={value}
        onInput={handleInput}
        onBlur={() => setError(false)}
        errorMessage={hasError && "Your todo should be contain minimum 1 letter 😡"}
      >
        New todo
      </Input>

      <Button
        type="outlined"
        className="todo-form__submit"
        nativeType="submit"
      >
        {!selectedTodo ? 'Create' : 'Edit'}
      </Button>
    </form>
  )
}

export {
  TodoForm
}