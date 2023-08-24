import React from 'react'
import { ContextGlobal } from '../PageContext/ContextGlobal'

const styleList = {
    background: 'black',
    width: '100%',
    textAlign: 'center',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    color: 'green',
    margin: '20px',
    justifyContent: 'space-between'
}

const styleInput = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'green',
  borderRadius: '10px'
}

const styleButton = {
  backgroundColor: 'limegreen',
  borderRadius: '10px',
  color: 'black',
  borderColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function SearchExercise(){
  const {
    searchExercise,
    setSearchExercise
  } = React.useContext(ContextGlobal)

  return(
    <div style={styleInput} >
      <input 
      placeholder="Buscar ejercicio"
      value={searchExercise}
      onChange={(eventSearch)=>{
      setSearchExercise(eventSearch.target.value)
    }} 
    />

    </div>
  )
}
export {SearchExercise}

function ListExercises(props){ // Creando un complemento que por dentro lleva los elementos que se mostraran en el navegador y se podran reutilizar si es necesario
    return(
      <div style={styleList}>
        <input
        id="input-exercise" 
        type="checkbox" 
        name="exercise"
        onClick={props.onCompleted}
        />
      
        <label 
        htmlFor='input-exercise'
        >{props.text}</label>

        <button 
        style={styleButton}
        onClick={props.onDeleted}
        >Deleted</button>
      </div>
    )
}
export { ListExercises } // Todos los componenetes se deben exportar al finalizarlo y una buena practica para no exportarlo por default lo hacemos con la sintaxis de un objeto