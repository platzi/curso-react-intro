import React from 'react';
import { TodoIcon } from './TodoIcon' //Importa React y el componente TodoIcon desde un archivo llamado TodoIcon.js.

function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon //Define el componente CompleteIcon. Este componente renderiza el componente TodoIcon con las propiedades type='check' y color='green'.
            type='check'
            color={completed ? 'green' : 'gray'} //si la propiedad completed es true, entonces se pone de colo verde... si no, se pone de color gris
            onClick={onComplete} // funcion del click
        /> // se encarga de mostrar un ícono de verificación (check) para representar la acción de completar una tarea. 
    )
}

export { CompleteIcon } //Exporta el componente CompleteIcon para su uso en otras partes de la aplicación.