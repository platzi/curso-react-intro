import './css/TodoButton.css';

function TodoButton() {
    return (
        <button type="" onClick = { //funcion anonima de js en JSX con OnClick
            () => {
                return console.log('Le diste click al boton');
            }
        }>+</button>
    )
}

export {TodoButton}