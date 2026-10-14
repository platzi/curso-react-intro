import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }){
    return(
      <button className="button-posision button-add material-symbols-outlined"
        onClick={ 
          () => {
            setOpenModal(true);
          }
        }>add_circle
      </button>
    );
  }


  export { CreateTodoButton };