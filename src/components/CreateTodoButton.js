const buttonStyle = {
    width: '70px',
    height: '70px',
    position: 'relative',
    left: '580px',
    top: '50px',
    borderRadius: '50%',
    border: '2px solid #D91656',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    background: '#D91656',
    fontSize: '30px',
    zIndex: '100',
}

function CreateTodoButton({ setOpenModal }) {
    return (
        <button style={buttonStyle} 
            
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >+</button>
    );
}
export { CreateTodoButton }; //esto es un export nombrado devuele en obgeto
