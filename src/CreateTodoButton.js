function CreateTodoButton(){
    return(
      <button className="cursor-pointer"
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