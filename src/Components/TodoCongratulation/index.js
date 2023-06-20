import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCongratulation.css'



function TodoCongratulation() {
  const {
    congratulation,
    setCongratulation,
} = React.useContext(TodoContext) 
  return (
    <div className='TodoCongratulation'
      value={congratulation}
      onChange={
        setCongratulation(true)}>
        <p className='Congratulation'>
            🎉 CONGRATULATION 🎉
        </p>
    </div>
  )
}

export { TodoCongratulation }