import { useContext } from 'react';
import { TodoContext } from '../Components/Context';
import '../Styles/CreateTodoButton.css'; 

function CreateTodoButton({openModal, setOpenModal}) { 
  return (
  <button 
    onClick={() => {
      setOpenModal(state => !state)
    }} 
    className={!openModal? "CreateTodoButton": "CreateTodoButtonClicked"}>+
    </button>); 
}

export { CreateTodoButton };