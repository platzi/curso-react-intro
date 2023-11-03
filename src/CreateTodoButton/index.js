import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';
import { AiFillPlusCircle } from  "react-icons/ai";


function CreateTodoButton(){
    const { setOpenModal } = React.useContext(TodoContext);
    return(
        <button
         className="CreateTodoButton"
         onClick={
            (event) =>{
                setOpenModal((abrirModal) => !abrirModal)
            }
         }
         >
         <AiFillPlusCircle/>
         </button>
    );
}

export {CreateTodoButton};