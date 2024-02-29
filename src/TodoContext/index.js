import React from "react";
import {useLocalStorage} from './useLocalStorage'
const TodoContext = React.createContext()
function TodoProvider({children}) {
    const {
        item: todos,
        saveItem:saveTodos,
        loading,
        error} = useLocalStorage('TODOS_V1',[])
      
      const [searchValue, setSearchValue] = React.useState('')
      
    const [openModal, setOpenModal] = React.useState(false)
      const CompletedTodos = todos.filter(todo => todo.completed).length
      const totalTodos = todos.length
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLocaleLowerCase()
          return todoText.includes(searchText)
        }
      )
    
      const addTodo = (text) => {
        const updatedTodos =[...todos]
        updatedTodos.push({
          text,
          completed:false,
        })
      
        saveTodos(updatedTodos)
        
      }

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
        
    <TodoContext.Provider value={{
     CompletedTodos,
     totalTodos,
     loading,
     searchValue,
     setSearchValue,
     error,
     searchedTodos,
     completeTodo,
     deleteTodo,
     openModal,
     setOpenModal,
     addTodo
     
        }}>
            {children}
    </TodoContext.Provider>

    );
}
    export { TodoContext, TodoProvider };