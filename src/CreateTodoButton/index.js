import './CreateTodoButton.css'
import { AiFillPlusCircle } from  "react-icons/ai";


function CreateTodoButton({ setOpenModal, setEditingTodo }){
    return(
        <button
         className="CreateTodoButton"
         onClick={
            () =>{
                setEditingTodo(null);
                setOpenModal((abrirModal) => !abrirModal);
            }
         }
         >
         <AiFillPlusCircle/>
         </button>
    );
}

export {CreateTodoButton};