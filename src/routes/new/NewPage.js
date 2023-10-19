import React from 'react'
import { useTodos } from '../useTodos'
import { TodoForm } from '../../Components/TodoForm'

function NewPage() {
  const { stateUpdaters } = useTodos()
  const { addTodo } = stateUpdaters
  return (
    <TodoForm
      label='Write to new TODO'
      submitText='Add'
      submitEvent={(text) => addTodo(text)} />
  )
}

export { NewPage }