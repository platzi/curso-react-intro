import React from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
const [ newTodoValue, setNewTodoValue ] = React.useState('')

const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
}
const onChange = (event) => {
    setNewTodoValue(event.target.value)
}
const onCancel = () => {
    setOpenModal(false)
}
    return (
        <form onSubmit={onSubmit}>
            <label>Create your new To Do</label>
            <textarea
            placeholder='Study React...'
            value={newTodoValue}
            onChange={onChange}
            required/>
        <div className='TodoForm-buttonContainer'>
            <button
            type="button"
            className='TodoForm-button TodoForm-button--cancel'
            onClick={onCancel}>Cancel</button>
            <button
            type="submit" 
            className='TodoForm-button TodoForm-button--add'>Add</button>
        </div>
        </form>
    )
}

export { TodoForm }