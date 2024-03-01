import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosCreate} from '../TodosCreate'
import {TodosError} from '../TodosError'
import { Modal } from './Modal';
import {TodosLoading} from '../TodosLoading'
import {TodoContext} from '../TodoContext'
import {TodoForm} from '../TodoForm'
function AppUI()
{
    const {loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
        
      }= React.useContext(TodoContext)
    return (
        <div className='flex bg-violet-500 h-screen justify-center items-center'>
          <>
            <div className='container flex flex-col justify-center 
            border-2 rounded-lg bg-violet-500	'>
              <TodoCounter/> 
              <TodoSearch/>
        
 
     <TodoList>
     {loading && <TodosLoading/>}
     {error && <TodosError/>}
     {(!loading && searchedTodos.length === 0) && <TodosCreate/>}
 
 {searchedTodos.map(todo=>(
   <TodoItem 
   key={todo.text}
   text={todo.text}
   completed={todo.completed}
   onComplete={() => completeTodo(todo.text)}
   onDelete={()=> deleteTodo(todo.text)}
   />
 ))}
</TodoList>
                
            </div>
            {openModal && (
                  <Modal>
                    <TodoForm/>
                  </Modal>
                )}
          </>
          <CreateTodoButton setOpenModal={setOpenModal}/>

        </div>
          );
}

export {AppUI}