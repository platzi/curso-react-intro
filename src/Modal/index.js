import React from 'react';
import './Modal.css';

function Modal({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const handleAddTodo = () => {
    if (newTodoValue.trim()) {
      addTodo(newTodoValue);
      setNewTodoValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setOpenModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Crear nueva tarea</h2>
        <input
          type="text"
          placeholder="Escribe tu nueva tarea aquí..."
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <div className="modal-buttons">
          <button 
            className="modal-btn-cancel" 
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </button>
          <button 
            className="modal-btn-add" 
            onClick={handleAddTodo}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
