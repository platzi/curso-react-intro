import React from 'react'
import {NameCounter} from "../Components/NameCounter/index";
import { TodoFilter } from "../Components/TodoFilter/index";
import { TodoList } from "../Components/TodoList/index";
import {TodoItem} from "../Components/TodoItem/index";
import { CreateButton } from "../Components/CreateButton/index";
import {TodosLoading} from "./TodosLoading"
import {TodosError} from "./TodosError"
import {EmptyTodos} from "./EmptyTodos"
import { TodoContext } from "../Contexts/todoContext";
import { TodoForm } from '../Components/todoForm/todoForm';
import { Modal } from './Modal';
const Logica = ()=>{
  const {completeTodo,deleteTodo,searchedTodos,setState, loading, error, openModal, setOpenModal} = React.useContext(TodoContext)

    return(  <>
        <NameCounter />
       <TodoFilter setState={setState}/>
       <TodoList>
       {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            element={todo}
            completed={todo.completed}
            oncomplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
       <CreateButton abrir={setOpenModal}/>

       {
        openModal && <Modal> <TodoForm/></Modal>
       }
         
       </TodoList>
    
    </>)
}

export {Logica}