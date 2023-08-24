import React from "react"
import { TitleCreateExercise } from '../CreateExercise/CreateExercise'
import { CreateExercise } from'../CreateExercise/CreateExercise'
import { CountExerciseTitle } from'../ExerciseList/CountExerciseTitle'
import { SearchExercise } from '../ExerciseList/ListExercises.js'
import { ContainerListExercises } from'../ExerciseList/ContainerListExercises.js'
import { ListExercises} from'../ExerciseList/ListExercises.js'
import { PageLoading } from "../PageLoading/PageLoading"
import { PageError } from "../PageError/PageError"
import { Modal } from "../ModalGlobal/Modal"
import { ExerciseForm } from "../ExerciseFormAdd/ExerciseForm"
import { ContextGlobal } from "../PageContext/ContextGlobal.js"

function AppComponents() {
    const {
        loading,
        error,
        searchedExercise,
        exerciseCompleted,
        deletedExercise,
        openModal
    } = React.useContext(ContextGlobal)

    return(

        <React.Fragment> 
            <TitleCreateExercise />
            <CreateExercise/>
            {openModal && (
                <Modal>
                    <ExerciseForm />
                </Modal>
            )}
            
            <CountExerciseTitle />
            <SearchExercise />

            <ContainerListExercises>
                {loading && <PageLoading />}
                {error && <PageError />}
                {(!loading && searchedExercise.length == 0) && <p>AÑADIR RUTINA</p>}

                {searchedExercise.map(item => ( // Esta es la manera de trabajar con arrays, sus objetos y su manipulacion en react, despues de el componente, debemos indicar una key que concuerde con el objeto que se desea obtener. Al escribir el metodo para obetener el return no es en llaves si no en parentesis. Estoy ejecutando un estado derivado para poder filtrar el resultado que deseo
                <ListExercises
                    key={item.text} 
                    text={item.text} 
                    completed={item.completed}
                    onCompleted={() => exerciseCompleted(item.text)} // Se debe ejecutar como una funcion dentro de otra funcion para que no se rompa la aplicacion
                    onDeleted={() => deletedExercise(item.text)} // Debo solucionar que al darle click no elimina el ejercicio seleccionado sino el primero de la lista
                    />
                    ))}
            </ContainerListExercises>
        </React.Fragment> // Esto es indispensable o sino el codigo se rompe, todos los componentes deben ir dentro de una etiqueta para poderse renderizar y este es la forma que nos da React para solucionar eso
    )
}
export { AppComponents }