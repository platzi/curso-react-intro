import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/indexs';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
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

export {AppUI}