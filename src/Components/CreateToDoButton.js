import { AddIcon } from './AddIcon';
import './CreateToDoButton.css'

function CreateToDoButton() {
    return (
        <button 
        className="CreateToDoButton"
        onClick={
            (event) => {
                console.log('hiciste clic')
                console.log(event)
            }
        }
        >
            <AddIcon />
        </button>
    );
}

export { CreateToDoButton };