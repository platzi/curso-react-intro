import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodobutton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Ir a la comicon", completed: true},
  {text: "Cortar pasto", completed: false},
  {text: "Hacer tareas de la UTN", completed: true},
  {text: "Mirar cualquier película que no sea el señor de los anillos!", completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => <TodoItems key={todo.text} text={todo.text} completed={todo.completed} />)}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
