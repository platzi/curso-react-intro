import React from "react";
import { ContextGlobal } from "../PageContext/ContextGlobal";

const styleFormExercise = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'grey',
    borderRadius: '10px',
    maxWidth: '300px',
    maxHeight: '300px',
    width: '90%'
}

const styleLabelExercise = {
    margin: '10px'
}

const styleTextExercise = {
    margin: '10px',
    bordeRadius: '10px',
    height: '50px',
    width: '200px',
    maxWidth: '200px',
    maxHeight: '100px',
    textAlign: 'center',
    borderColor: 'green',
    width: '90%'
}

const styleButtonCancelExercise = {
    backgroundColor: 'white',
    border: 'transparent',
    borderRadius: '10px',
    margin: '5px',
    height: '40px',
    color: 'green',
    cursor: 'pointer'
}

const styleButtonAddExercise = {
    backgroundColor: 'green',
    border: 'transparent',
    borderRadius: '10px',
    margin: '5px',
    height: '40px',
    color: 'white',
    cursor: 'pointer'
}

function ExerciseForm(){
    const{
        addExercise,
        setOpenModal
    }=React.useContext(ContextGlobal)
    const [newExerciseValue, setNewExerciseValue] = React.useState('')

    const OnSubmit = (event)=>{
        event.preventDefault()
        addExercise(newExerciseValue)
        setOpenModal(false)
    }

    const OnCancel = ()=>{
        setOpenModal(false)
    }

    const OnChange = (event)=>{
        setNewExerciseValue(event.target.value)
    }

    return(
        <form 
        style={styleFormExercise}
        onSubmit={OnSubmit}
        >
            <label style={styleLabelExercise}>Agregar ejercicio</label>
            <textarea
            style={styleTextExercise} 
            placeholder="Inicia tu rutina"
            value={newExerciseValue}
            onChange={OnChange}
            />
            <div>
                <button 
                style={styleButtonCancelExercise}
                type="button"
                onClick={OnCancel}
                >Cancelar</button>

                <button
                 style={styleButtonAddExercise}
                 type="submit"
                 >Agregar</button> 
            </div>
        </form>
    )
}
export { ExerciseForm }