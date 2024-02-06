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
  const [searchValue, setSearchValue] = React.useState('')
  console.log(searchValue) 
  return (
<div className='flex justify-center'>
  <>
    <div className='container flex flex-col justify-center border-2 border-teal-500 bg-teal-400'>

      <TodoCounter completed={16} total= {25} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
        ))}
      </TodoList>

        <CreateTodoButton/>
    </div>
  </>
</div>
  );
}



export default App;
