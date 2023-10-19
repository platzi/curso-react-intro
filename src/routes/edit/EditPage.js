import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTodos } from '../useTodos'
import { TodoForm } from '../../Components/TodoForm'


function EditPage() {
  const location = useLocation()
  const params = useParams()// for known id
  const id = Number(params.id)
  const { todoEdit } = useTodos().stateUpdaters
  const { loading, getTodo } = useTodos().state

  let todoText 

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <div>Loading...</div>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }
    return (
      <TodoForm
        label='Edit to TODO'
        defaultTodoText={todoText}
        submitText='Edit'
        submitEvent={(newText) => todoEdit(id, newText)} />
      )
  }
export { EditPage }