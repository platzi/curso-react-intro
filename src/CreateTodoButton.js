function CreateTodoButton(){
    return(
      <button className=" text-white cursor-pointer"
      onClick={
        (event)=>{
        console.log('click')
        console.log(event)}
        
        }>
        Add
      </button>
    );
  }

  export {CreateTodoButton};