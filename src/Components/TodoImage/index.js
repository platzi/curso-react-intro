import React from 'react'
import './TodoImage.css'
import Image from './OIP.jpg'

function TodoImage() {
  return (
    <div className='TodoImage'>
    <img  src={Image} className='TodoImage-img' alt='task'/>
  </div>
  )
}

export { TodoImage }