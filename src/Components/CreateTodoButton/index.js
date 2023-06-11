import React from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext) 
    return (
        <button className='CreateTodoButton' 
        value={openModal}
        onClick={
            () => {
            setOpenModal(state => !state)
        }}>
            +
        </button>
    )
}

export { CreateTodoButton }