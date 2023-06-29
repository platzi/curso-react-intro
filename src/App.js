// import logo from './platzi.webp';
// import './App.css';
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"
import {TodoList} from "./TodoList"
import {CreateTodoButton} from "./CreateTodoButton"
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  {text :"cortar" , completed: true},
  {text :"cortar 1" , completed: true},
  {text :"cortar 2" , completed: false},
  {text :"cortar 3" , completed: false},
  {text :"cortar 4" , completed: false}

]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={12} total={22} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed}/>
        ))}
        
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
