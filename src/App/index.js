import React, { useState }  from 'react';
import {useLocalStorage} from './useLocalStorage';
import {AppUI} from './AppUi'

// const defaultTodos = [
//   {text :"cortar" , completed: true},
//   {text :"cortar 1" , completed: true},
//   {text :"cortar 2" , completed: false},
//   {text :"cortar 3" , completed: false},
//   {text :"cortar 4" , completed: false}
// ]

// localStorage.setItem("TODOS_V1" , JSON.stringify(defaultTodos))
// localStorage.removeItem("TODOS_V1")


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
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}/>
  );
}


export default App;
