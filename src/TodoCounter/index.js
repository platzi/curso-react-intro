
function TodoCounter({total, completed}){
    return(

      <>
      
      <h1 className=" text-2xl p-2 text-white text-center">
        Has completado {completed} de {total} TODOS
      </h1>
      
      
      </>
    )
  }
export { TodoCounter }