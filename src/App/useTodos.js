import React from 'react'
import { useLocalStorage } from './useLocalStorage'


function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    const [congratulation, setCongratulation ] = React.useState(false)
    //estates derivations
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    //function to add, completed and delete 
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos)
    }
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
    return {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            todoCompleted,
            todoDelete,
            openModal,
            setOpenModal,
            addTodo,
            congratulation,
            setCongratulation,
            sincronizeTodos
        }
    }     
export { useTodos }