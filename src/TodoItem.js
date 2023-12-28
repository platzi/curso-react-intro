/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/TodoItem.css';
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
        //Se están importando dos componentes: CompleteIcon desde el archivo './CompleteIcon' y DeleteIcon desde el archivo './DeleteIcon'.

function TodoItem(props){ //componente
    return( //elemento
        <li className = 'TodoItem'>
            <CompleteIcon />

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            
            <DeleteIcon />
        </li>
    );
}

export {TodoItem}