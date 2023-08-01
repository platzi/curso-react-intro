import "../../styles/buttonStyle.css"

const CreateButton = ({abrir})=>{

    return(
      <button className="CreateTodoButton" onClick={()=>{abrir(e=>!e)}}>+</button>
    )    
  
  }

  export {CreateButton}