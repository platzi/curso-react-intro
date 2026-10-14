import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }){
  return(
    <h1>
      {completed === total && total > 0 
        ? '¡Felicidades, has completado todas tus tareas!' 
        : `Has completado ${completed} de ${total} tareas`}
    </h1>
  );
}


export { TodoCounter };