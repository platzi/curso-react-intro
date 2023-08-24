import React from "react"
import { ContextGlobal } from "../PageContext/ContextGlobal"

const styleTitle = {// Esta es una manera de estilizar los componentes, otra manera seria escribiendo archivos .css
    fontSize: '24px',
    textAlign: 'center',
    color: 'white'
}

function CountExerciseTitle(){ 
    const {
        completedExercise,
        totalExercise, // De esta manera estoy utilizando el react context de una manera mas comoda y eficaz a mi mode de ver, utilizando la herramienta React.useContext(), donde en la variable le indicamos los parametros a utilizar
    } = React.useContext(ContextGlobal)
    return(
        <h1 style={styleTitle}>
            Has completado {completedExercise} de {totalExercise} ejercicios
        </h1>
    )
}
export { CountExerciseTitle }