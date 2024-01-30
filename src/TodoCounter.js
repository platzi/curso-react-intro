import './TodoCounter.css'
function TodoCounter({total, completed}){
    return(
      <h1 className='text-3xl font-bold underline'>
        Has completado {completed} de {total} TODOS
      </h1>
    )
  }
export { TodoCounter }