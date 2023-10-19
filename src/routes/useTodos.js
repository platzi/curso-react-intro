import React from 'react'
import { useLocalStorage } from './useLocalStorage'


function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V2', []) //because we changed the structure and added an id 
    const [searchValue, setSearchValue] = React.useState('')
    const [congratulation, setCongratulation ] = React.useState(false)
    //estates derivations
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    //function to add, completed and delete 
    const addTodo = (text) => {
        const id = newTodoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos)
    }
    const todoCompleted = (id) => {
        const newTodos = [...todos]
        const todoIndex = todos.findIndex(todo => todo.id === id)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }
    const getTodo = (id, newText) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        return todos[todoIndex]
    }
    const todoEdit = (id, newText) => {
        const newTodos = [...todos]
        const todoIndex = todos.findIndex(todo => todo.id === id)
        newTodos[todoIndex].text = newText
        saveTodos(newTodos)
    }
    const todoDelete = (id) => {
        const newTodos = [...todos]
        const todoIndex = todos.findIndex(todo => todo.id === id)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const state = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        filteredTodos,
        getTodo
    }
    const stateUpdaters = {
        setSearchValue,
        todoCompleted,
        todoDelete,
        addTodo,
        congratulation,
        setCongratulation,
        sincronizeTodos,
        todoEdit
    }
    return { state, stateUpdaters}
    }
    
function newTodoId(todoList) {
    if (!todoList.length) {
        return 1
    }
    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    return idMax + 1
}
export { useTodos }