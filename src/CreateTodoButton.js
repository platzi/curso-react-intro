import React from 'react';
import './CreateTodoButton.css';
import NewNote from './NewNote';

function CreateTodoButton({saveNote}) {

  const [showNewNote, setShowNewNote] = React.useState(false);

  const toggleNewNote = () => {
    setShowNewNote(!showNewNote);
  };

  // Oculta el div de agregar nueva nota, el cual es llamado en NewNote
  const handleNoteClose = () => {
    setShowNewNote(false);
  };

  return (
    <div>
      <button 
        className="CreateTodoButton" 
        onClick={toggleNewNote}
      >
        +
      </button>
      {showNewNote && <NewNote saveNote={saveNote} onClose={handleNoteClose}/>} {/* Mostrar NewNote si showNewNote es verdadero */}
    </div>
  );
}
export { CreateTodoButton};