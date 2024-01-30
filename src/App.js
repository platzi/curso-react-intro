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
  return (
<div className='container flex flex-col border-2 border-teal-500 bg-teal-400'>
  <>

      <TodoCounter completed={16} total= {25} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
        ))}
      </TodoList>

        <CreateTodoButton/>

  </>
</div>
  );
}



export default App;
