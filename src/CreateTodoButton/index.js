function CreateTodoButton({setOpenModal}){
    return(
      <button className=" 
      text-white z-50 m-2 cursor-pointer rounded-lg border-2 border-white  bg-violet-500 hover:bg-violet-400 active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-500"
      onClick={
        ()=>{ setOpenModal(state => !state)}
        
        }>
        Add
      </button>
    );
  }

  export {CreateTodoButton};