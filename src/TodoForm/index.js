import React from 'react'
import { TodoContext } from '../TodoContext';
function TodoForm(){
   
 const [newTodoValue, setNewTodoValue]= React.useState('')

const {
    setOpenModal,
    addTodo,
} = React.useContext(TodoContext)

const onCancel = () => {
    
    setOpenModal(false)
}

const onChange = (event) => {
    setNewTodoValue (event.target.value)
}

const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
}


    return (
<form 
id='form'
className='bg-violet-50 rounded-lg'
onSubmit={onSubmit}>


          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-300 ">
            <h3 className="font-bold ">
              Add a Todo!
            </h3>
            <button 
            onClick={onCancel}
            type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-black hover:text-white dark:hover:bg-violet-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
              <span className="sr-only">Close</span>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="p-5 overflow-y-auto">
            <textarea
            value={newTodoValue}
            onChange={onChange}
            className="block p-2.5 w-full text-sm text-gray-900 outline-none rounded-lg border border-violet-300 focus:ring-violet-300 focus:border-violet-500 bg-violet-100 border-violet-300 placeholder-gray-400 text-black focus:ring-violet-500 focus:border-violet-500" placeholder="Your todo...">
              
            </textarea>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-300">
            <button type="button"
            onClick={onCancel} 
            className="py-2 px-3 inline-flex items-center
             gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50  disabled:pointer-events-none hover:border-gray-200 hover:dark:text-black dark:text-black hover:bg-slate-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
              Close
            </button>
            <button type="submit" className=" bg-violet-500 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-violet-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Save changes
            </button>
          </div>
</form>
    )
}

export {TodoForm}

