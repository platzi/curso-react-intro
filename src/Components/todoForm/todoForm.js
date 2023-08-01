import React from 'react'
import "../../styles/todoForm.css"
import {TodoContext} from "../../Contexts/todoContext"
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("")
    const {setOpenModal,addTodo } = React.useContext(TodoContext)
    const OnSubmit = e =>{
        addTodo(newTodoValue)
        e.preventDefault()
        setOpenModal(false)
    }

    const OnCancel = () =>setOpenModal(false)
    const OnChange = e=>{ setNewTodoValue(e.target.value)}
    return(
        <>
            <form onSubmit={OnSubmit}>
                <label>Escribe tu nuevo Todo</label>
                <textarea  placeholder='escribe aquí...' value={newTodoValue} onChange={OnChange}></textarea>
            <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={OnCancel}>cancelar</button>
            <button className='TodoForm-button TodoForm-button--add' type='submit'>agregar</button>
            </div>
            </form>
        </>
    )
}

export {TodoForm}