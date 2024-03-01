function CreateTodoButton({setOpenModal}){
    return(
      <button
      title="Add New"
      className="absolute bottom-10 right-10 group cursor-pointer z-50 outline-none hover:rotate-90 duration-300"
      style={{ width: '75px' }}
      onClick={
        ()=>{ setOpenModal(state => !state)}
        
        }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75px"
        height="75px"
        viewBox="0 0 24 24"
        className="stroke-violet-100 fill-none group-hover:fill-violet-500 group-active:stroke-violet-200 group-active:fill-violet-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        ></path>
        <path d="M8 12H16" strokeWidth="1.5"></path>
        <path d="M12 16V8" strokeWidth="1.5"></path>
      </svg>
    </button>
    );
  }

  export {CreateTodoButton};

 