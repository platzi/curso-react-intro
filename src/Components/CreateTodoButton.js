import '../Styles/CreateTodoButton.css'; 

function CreateTodoButton() { 
  return (
  <button 
    onClick={() => {
      console.log('click')
    }} 
    className="CreateTodoButton">+
    </button>); 
}

export { CreateTodoButton };