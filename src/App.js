import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import {TodosCreate} from './TodosCreate'
import {TodosError} from './TodosError'
import {TodosLoading} from './TodosLoading'
import {TodosCounterLoading} from './TodosCounterLoading'
import React from 'react';



function useLocalStorage(itemName,
   initialValue){

  const [item,setItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error,seterror] = React.useState(false);

  React.useEffect(()=>{
  setTimeout(()=>{
    try {
      
      const localStorageItem = localStorage.getItem(itemName)
    let parsedItem;
      if (!localStorageItem){
        localStorage.setItem(itemName,
          JSON.stringify(initialValue))
        parsedItem = initialValue;
    
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem)
    }
    setLoading(false)
  
    } catch(error){
      setLoading(false)
      seterror(true)
    }
  },2000)
  },[])

const saveItem = (newItem) =>{
  localStorage.setItem(itemName,
  JSON.stringify(newItem))
  
  setItem(newItem)
}

return {item,
saveItem,
loading,
error}
}

function App() {

  const {
    item: todos,
    saveItem:saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1',[])
  
  const [searchValue, setSearchValue] = React.useState('')
  

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
      (todo) => todo.text === text 
    );
    updatedTodos[todoIndex].completed = true;
    saveTodos(updatedTodos) 
  }

  const deleteTodo = (text) => {
    const updatedTodos = [...todos]
    const todoIndex = updatedTodos.findIndex(
      (todo) => todo.text === text 
    )
    updatedTodos.splice(todoIndex, 1)
    saveTodos(updatedTodos)
  }
  
  return (
<div className='flex bg-violet-500 h-screen justify-center items-center'>
  <>
    <div className='container flex flex-col justify-center 
    border-2 rounded-lg bg-violet-500	'>
      <TodoCounter completed={CompletedTodos} total= {totalTodos}>
      {loading && <TodosCounterLoading/>}
      </TodoCounter>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <TodosCreate/>}
        
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
