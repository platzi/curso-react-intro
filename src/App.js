// import logo from './platzi.webp';
// import './App.css';
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"
import {TodoList} from "./TodoList"
import {CreateTodoButton} from "./CreateTodoButton"
import { TodoItem } from './TodoItem';
import React, { useState }  from 'react';

const defaultTodos = [
  {text :"cortar" , completed: true},
  {text :"cortar 1" , completed: true},
  {text :"cortar 2" , completed: false},
  {text :"cortar 3" , completed: false},
  {text :"cortar 4" , completed: false}

]

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue , setSearchValue ] = useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("searchValue",searchValue)

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed}/>
        ))}
        
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}


export default App;
