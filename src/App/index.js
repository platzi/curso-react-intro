import React  from 'react';
// import {useLocalStorage} from './useLocalStorage';
import {AppUI} from './AppUi'
import { TodoProvider } from '../TodoContext';

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
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}


export default App;
