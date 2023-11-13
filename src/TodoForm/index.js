import React from "react";
import './TodoForm.css'
import { AiTwotoneEdit } from "react-icons/ai";
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault(); //evitar recargar la página
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    const onCancel = ()=>{
        setOpenModal(false);
    };

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    };

  return (
    <form className="formModal" onSubmit={onSubmit}>
      {" "}
      {/* conecta con el submi */}
      <label>Escribe tu nueva tarea <AiTwotoneEdit/></label>
      <textarea
        placeholder="Actividad por hacer 🚀"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
