// import logo from './platzi.webp';
// import './App.css';
import {TodoCounter} from "./TodoCounter"
import {TodoSearch} from "./TodoSearch"
import {TodoList} from "./TodoList"
import {CreateTodoButton} from "./CreateTodoButton"
import { TodoItem } from './TodoItem';
import React, { useState }  from 'react';

// const defaultTodos = [
//   {text :"cortar" , completed: true},
//   {text :"cortar 1" , completed: true},
//   {text :"cortar 2" , completed: false},
//   {text :"cortar 3" , completed: false},
//   {text :"cortar 4" , completed: false}
// ]

// localStorage.setItem("TODOS_V1" , JSON.stringify(defaultTodos))
// localStorage.removeItem("TODOS_V1")

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName) 

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName , JSON.stringify(initialValue))
    parsedItem=initialValue
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem);
  
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item , saveItem]
}

function App() {
  // let parsedTodos = JSON.parse(localStorageTodos)
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue , setSearchValue ] = useState("")

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText =todo.text.toLowerCase();
      const searchText =searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )
  
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }


  console.log("searchValue",searchValue)

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.key} text={todo.text} completed={todo.completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=> deleteTodo(todo.text)}/>
        ))}
        
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}


export default App;
