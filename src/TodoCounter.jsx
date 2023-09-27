import React from 'react';
import "./TodoCounter.css"

function TodoCounter({ total, completed }){

    const frasesMotivacionales = [
        "Cree en ti, todo es posible.",
        "El éxito es la suma de esfuerzos.",
        "La perseverancia lleva a la victoria.",
        "Si puedes soñarlo, puedes lograrlo.",
        "El cambio comienza con una decisión.",
        "Enfrenta los retos con valentía y determinación.",
        "Cada día es una nueva oportunidad.",
        "Persiste con fuerza, la meta te espera.",
        "Si puedes imaginarlo, puedes crearlo.",
      ];

      const fraseMotivacional = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
    return(
        <h1 className="TodoCounter">
            Has completado <span>{completed} </span> 
            de <span>{total}</span> TODOs
        <p>{fraseMotivacional}</p>
        </h1>
    );
}


export { TodoCounter };