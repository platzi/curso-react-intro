import React from 'react'
import {TodoIcon } from './index'

function DeleteIcon({ onDelete }) {
    return (
    <TodoIcon
        type='delete'
        color='gray' 
        onClick={onDelete}
    />
    )   
}

export { DeleteIcon }