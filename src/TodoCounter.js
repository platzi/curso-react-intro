import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(

        total == completed?

        <h1 className='TodoCounter'>Felicidades! No tienes tareas pendientes!!!</h1> :
        
        <h1 className='TodoCounter'> 
            Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </h1>
    );
}

  export { TodoCounter };