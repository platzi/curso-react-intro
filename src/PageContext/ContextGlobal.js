import React from "react";
import { useLocalStorage } from "./useLocalSotorage.js";

const ContextGlobal = React.createContext()

function ExerciseProvider({children}){

    // ESTADOS
  const {
    item: exercises, 
    saveItem: saveExercises,
    loading,
    error
  } = useLocalStorage('work-out', []) // Le estoy diciendo que el estado inicial es el array con objetos
  const [searchExercise, setSearchExercise] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false) // Para abrir el portal de manera manual seria cambiando el estado de un false a un true
  

  // ESTADOS DERIVADOS

  const completedExercise = exercises.filter(item => item.completed).length // Esto es un estado derivado, son variables, calculos etc, que hacemos a traves de un estado, tambien con el metodo filter le estoy diciendo que me devuelva los elementos que cumplan con la condicion
  const totalExercise = exercises.length

  const searchedExercise = exercises.filter((item)=>{
      return item.text.toLowerCase().includes(searchExercise.toLocaleLowerCase()) // Con estas dos metodos nuevos en el resultado no importa si lo busco en minuscula o mayuscula. Primero debo convertir tod en minuscula en con el metodo .toLowerCase() y despues lo que este entre parentesis del metodo includes le agrego el metodo .toLocaleLowerCase()
    })

  const exerciseCompleted = (text)=>{
    const newExercise =[...exercises]
     const exerciseIndex = newExercise.findIndex(
      (item) => item.text == text
     )
    newExercise[exerciseIndex].completed = true
    saveExercises(newExercise)
  }

  const deletedExercise = (text)=>{
    const newExercise = [...exercises]
    const exerciseIndex = newExercise.findIndex(
      (item) => item.text == text
     )
    newExercise[exerciseIndex].completed = true
    newExercise.splice(exerciseIndex, 1)
    saveExercises(newExercise)
  }

  const addExercise = (text)=>{
    const newExercise =[...exercises]
    newExercise.push({
      text,
      completed: false
    })
    saveExercises(newExercise)
  }

    return(
        <ContextGlobal.Provider value={{
            loading,
            error,
            completedExercise,
            totalExercise,
            searchExercise,
            setSearchExercise,
            searchedExercise,
            exerciseCompleted,
            deletedExercise,
            openModal,
            setOpenModal,
            addExercise
        }}>
            {children}
        </ContextGlobal.Provider>
    )
}


export { ContextGlobal, ExerciseProvider }