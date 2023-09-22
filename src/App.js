import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Estudiar', completed: true },
  { text: 'Desayunar', completed: false },
  { text: 'Ejercicios', completed: false },
  { text: 'Mercado', completed: true }]

function App() {
  return (
    <>
      <TodoCounter completed= {2} total= {4}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}

export default App;
