import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
/*
const defaultTodos =[
  {text: 'cortar cebolla', completed: true},
  {text: 'completar el curso de React', completed: false},
  {text: 'encontrar un trabajo IT', completed: false},
  {text: 'comenzar la dieta', completed: true},
  {text: 'usar estados derivados', completed: true},
  ];

  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  localStorage.removeItem('TODOS_V1');
*/

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos =[];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText)      
    }
  );

  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_v1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
   <>
      <h1 className='TodoCounter-title'>Tareas Pendientes</h1>

      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>
      
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList >
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete = {()=>completeTodo(todo.text)}
          onDelete = {()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
   </>    
  );
}

export default App;
