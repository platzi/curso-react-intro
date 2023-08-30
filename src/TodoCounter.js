import React from 'react'

const TodoCounterStyle = {
  fontSize: '40px',
  textAlign: 'center',
  margin: 0,
  padding: '48px',
};

function TodoCounter({total, completed}) {
  return (
    <h1 style={TodoCounterStyle}>
        Has completado {completed} de {total}!!
    </h1>
  )
}

export {TodoCounter};