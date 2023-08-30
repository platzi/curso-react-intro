import React from 'react';

function NewNote({ saveNote, onClose }) {
    const [note, setNote] = React.useState('');

    //eslint-disable-next-line no-unused-vars
    const [isOpen, setIsOpen] = React.useState(true); // Agregar estado para controlar la apertura/cierre
  
    const handleNoteChange = (event) => {
      setNote(event.target.value);
    };
  
    const handleSaveNote = () => {
      saveNote(note);
      setNote('');
    };
  
    const floatingStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      textAlign: 'center',
      backgroundColor: 'yellow',
      padding: '15px',
      border: '1px solid #ccc',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
      width: '100%', // Agrega esta propiedad para ocupar el 100% del ancho
      maxWidth: '30%', // Puedes ajustar esto según tus preferencias
      transform: 'translate(-50%, -50%)',
    };

    const textAreaStyle = {
        width: '100%', // Cambia "with" a "width"
        border: '1px solid #ccc', // Agrega el borde solo al textarea
        margin: '5px 0', // Añade un pequeño margen entre el textarea y el botón
        padding: '5px',
        color: 'black',
    };

    const myButtonStyles = {
      boxShadow: 'inset 0px -3px 7px 0px #29bbff',
      background: 'linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%)',
      backgroundColor: '#2dabf9',
      borderRadius: '3px',
      border: '1px solid #0b0e07',
      display: 'inline-block',
      cursor: 'pointer',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontSize: '15px',
      padding: '9px 23px',
      textDecoration: 'none',
      textShadow: '0px 1px 0px #263666',
      width: '100%',
    };
  
    const handleButtonHover = () => {
      myButtonStyles.background = 'linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%)';
      myButtonStyles.backgroundColor = '#0688fa';
    };
  
    const handleButtonActive = () => {
      myButtonStyles.position = 'relative';
      myButtonStyles.top = '1px';
    };

    const titleNoteStyle = {
      borderBottom: '2px solid black',
      paddingBottom: '5px',
      color: 'black',
    };
    
    const closeNoteStyle = {
      position: 'absolute',
      top: '10px', // Ajusta la distancia desde la parte superior según tu diseño
      right: '10px', // Ajusta la distancia desde la derecha según tu diseño
      display: 'inline-block',
      cursor: 'pointer',
      color: 'black',
      backgroundColor: 'transparent',
      fontFamily: 'Arial',
      fontSize: '15px',
      textDecoration: 'none',
    };

    // ...

    const handleClose = () => {
        setIsOpen(false); // Cambia el estado a cerrado cuando se hace clic en el botón "X"
        if (onClose) {
            onClose();
        }
    };
            
  
    return (
      <div style={floatingStyle}>
        <button style={closeNoteStyle} onClick={handleClose}>X</button>
        <h3 style={titleNoteStyle}> Ingrese una nueva tarea! :) </h3>
        <textarea style={textAreaStyle} rows="4" cols="50" value={note} onChange={handleNoteChange}/>
        <button 
          style={myButtonStyles}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonHover}
          onMouseDown={handleButtonActive}
          onMouseUp={handleButtonHover}
          onClick={handleSaveNote}>Guardar Nota</button>
      </div>
    );
  }

  export default NewNote;