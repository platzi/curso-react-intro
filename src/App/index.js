import React from 'react'
import { AppUI } from './AppUI'
import { useLocalStorage } from '../App/useLocalStorage' 

//We made a variable with array to create properties
//const defaultTodos = [
  //{text: 'I am Venezuela', completed: false},
  //{text: 'I am Col', completed: false},
  //{text: 'I am Ven', completed: false},
  //{text: 'I am Colombia', completed: false},
  //{text: 'estates derivation', completed: false},
//]
//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')

//function to complete delete and save tasks
function App() {
  const {
    item: todos,
    setItem:saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  //estates derivation
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  //useEffect
  //console.log('Log 1')
  //React.useEffect(() => {
  //  console.log('Log 2')
  //}, [totalTodos])
  //console.log('Log 3')

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

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
  <AppUI
  completedTodos={completedTodos}
  totalTodos={totalTodos}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  filteredTodos={filteredTodos}
  todoCompleted={todoCompleted}
  todoDelete={todoDelete}
  loading={loading}
  error={error}
  />
)
}
export default App;
