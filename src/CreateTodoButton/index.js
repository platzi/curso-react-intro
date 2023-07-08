// import "./CreateTodoButton.css"

// function CreateTodoButton({ setOpenModal }) {
//     return (
//       <>
//       <button 
//         className="CreateTodoButton" 
//         onClick={
//           (event)=> {
//             console.log("le diste click")
//             console.log(event)
//             console.log(event.target)
//             setOpenModal(state => !state);
//           }
//         }
//       >+</button>
//       </>
//     );
//   }

// export {CreateTodoButton};
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };