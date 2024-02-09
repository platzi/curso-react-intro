import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import React from 'react';

const defaultTodos = [
{text: 'Cortar Cebolla', completed:false},
{text: 'Tomar El curso de React', completed:true},
{text: 'Mandar Cvs', completed:true},
{text: 'Aprender Next.js', completed:false},
]

function App() {
  const [todos, setTodos] = React.useState
  (defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log(searchValue) 

  const CompletedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const updatedTodos =[...todos]
    const todoIndex = updatedTodos.findIndex(
      (todo) => todo.text == text 
    );
    updatedTodos[todoIndex].completed = true;
     setTodos(updatedTodos) 
  }

  const deleteTodo = (text) => {
    const updatedTodos = [...todos]
    const todoIndex = updatedTodos.findIndex(
      (todo) => todo.text == text 
    )
    updatedTodos.splice(todoIndex, 1)
    setTodos(updatedTodos)
  }
  
  return (
<div className='flex justify-center'>
  <>
    <div className='container flex flex-col justify-center border-2 border-teal-500 bg-teal-400'>

      <TodoCounter completed={CompletedTodos} total= {totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

        <CreateTodoButton/>
    </div>
  </>
</div>
  );
}



export default App;
