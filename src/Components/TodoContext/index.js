import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()//we create context
function TodoProvider({children}) {
    const {
        item: todos,
        setItem:saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    //estates derivation
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    //function to completed and delete
    const todoCompleted = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }
    const todoDelete = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
        return (
            <TodoContext.Provider value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                filteredTodos,
                todoCompleted,
                todoDelete
            }}>
                {children}
            </TodoContext.Provider>
        )
    }
export { TodoContext, TodoProvider }