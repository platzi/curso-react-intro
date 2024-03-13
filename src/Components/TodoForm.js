import { useState, useContext } from 'react';
import { TodoContext } from '../Components/Context';
import '../Styles/TodoForm.css'; 

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');

  const {addTodo, setOpenModal} = useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new ToDo</label>
      <textarea placeholder='text' value={newTodoValue} onChange={onChange}/>
      <div className='TodoForm-buttonContainer'>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>Add</button>
        <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export { TodoForm };