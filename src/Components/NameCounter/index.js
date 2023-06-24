import "../../styles/nameCounter.css"
const NameCounter = ({total, completed})=>{


    return(
      <h1 className="TodoCounter">
        has completado  {completed} de {total} ToDo's
      </h1>
    )    
  
  }

  export {NameCounter}