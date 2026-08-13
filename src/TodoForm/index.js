import React from "react";
import './TodoForm.css'
import { AiTwotoneEdit } from "react-icons/ai";
import { TodoContext } from "../App/useTodos";

function TodoForm({
        setOpenModal,
        addTodo,
        editingTodo,
        updateTodo,
    }) {

    const [newTodoValue, setNewTodoValue] = React.useState(editingTodo ? editingTodo.text : '');

    const onSubmit = (event)=>{
        event.preventDefault();
        if (editingTodo) {
            updateTodo(editingTodo.text, newTodoValue);
        } else {
            addTodo(newTodoValue);
        }
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
      <label>
        {editingTodo ? "Editar tarea" : "Escribe tu nueva tarea"} <AiTwotoneEdit/>
      </label>
      <textarea
        placeholder="Actividad por hacer 🚀"
        value={newTodoValue}
        onChange={onChange}
        required
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
          {editingTodo ? "Guardar" : "Añadir"}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
