import React from "react";
import './TodoForm.css'

function TodoForm() {
  return (
    <form className="formModal">
      {" "}
      {/* conecta con el submi */}
      <label>Escribe tu nueva tarea</label>
      <textarea
        
        placeholder="Actividad por hacer"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          
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
