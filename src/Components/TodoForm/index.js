import React from 'react'
import './TodoForm.css'

function TodoForm() {
    return (
        <form>
            <label>Writing your new TODOs</label>
            <textarea 
            placeholder='Study React'/>
        <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel'>Cancel</button>
            <button className='TodoForm-button TodoForm-button--add'>Add</button>
        </div>
        </form>
    )
}

export { TodoForm }