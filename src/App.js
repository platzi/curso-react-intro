import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';



const defaultTodos =[
  {text: 'cortar cebolla', completed: true},
  {text: 'completar el curso de React', completed: false},
  {text: 'encontrar un trabajo IT', completed: false},
  {text: 'comenzar la dieta', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  console.log ('Los usuarios buscan ToDos de ' + searchValue);

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
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    

   </>

      
    
  );
}



export default App;
