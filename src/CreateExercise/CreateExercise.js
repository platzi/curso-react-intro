import React from 'react'
import { ContextGlobal } from '../PageContext/ContextGlobal'

const StyleTitleCreateExercise = {
    justifyContent: 'center',
    display: 'flex',
    color: 'white'
}

const styleDivButtonAdd = {
    display: 'flex',
    justifyContent: 'center'
}

const styleButtonAdd = {
    backgroundColor: 'black',
    color: 'green',
    border: 'transparent',
    borderRadius: '10px',
    width: '90px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
}

function TitleCreateExercise(){
    return(
        <h2 style={StyleTitleCreateExercise}>Agregar ejercicio</h2>
    )
}
export {TitleCreateExercise}

function CreateExercise(){
    const {
        setOpenModal
    } =React.useContext(ContextGlobal)
    return(
        <div style={styleDivButtonAdd}>
            <button
            style={styleButtonAdd} 
            onClick={()=>{
                setOpenModal(state => !state) // Con este metodo puedo actualizar el modal en pantalla al darle  click, aparece o desaparece segun el caso
            }}
            >+</button>
        </div> 
    )
}
export { CreateExercise }


// function BotonCreateExercise(){
//     return(
//         <button onClick={() =>
//           console.log('Diste click')
//         } >Agregar</button>
//     )
// }
// export {BotonCreateExercise}