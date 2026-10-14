import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import './app.css';

function AppUI ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
  addTodo,
}){  
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />      
      <TodoList>
        {loading && <p style={{ color : 'greenyellow' }}>Estamos Cargando...</p>}
        {error && <p>Se ha presnetado un error !...</p>}
        {(!loading && searchTodos.length  === 0) && <p>Crear tu primer tarea!</p>}        

        {searchTodos.map(todo => (
          <TodoItem  
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>      
      {openModal && (
        <Modal addTodo={addTodo} setOpenModal={setOpenModal} />
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />        
    </>
  );
}  

export { AppUI };