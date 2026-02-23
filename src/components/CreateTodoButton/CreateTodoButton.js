import './CreateTodoButton.css';

function CreateTodoButton() {
     return (
          <button
               className="CreateTodoButton"
               onClick={() => console.log('¡Botón clickeado!')}
          >
               +
          </button>
     );
}

export { CreateTodoButton };
