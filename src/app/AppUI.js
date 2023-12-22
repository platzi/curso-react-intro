import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from '../components/TodoForm';
import { Modal } from '../modal';
import { TodoContext } from '../components/TodoContext';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
      {loading && (
        <>
          <TodosLoading/>
          <TodosLoading/>
          <TodosLoading/>
        </>
      )}
      {error && <TodosError/>}
      {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
      {searchedTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/> 
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}
export { AppUI };