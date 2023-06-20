import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton({openModal,setOpenModal}) { 
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