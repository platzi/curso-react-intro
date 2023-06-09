import React from 'react'
import './TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completed}</span> out of <span>{total}</span> TODOs
    </h1>
  )
}

export { TodoCounter }