/* eslint-disable jsx-a11y/anchor-is-valid */
import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
        //Se están importando dos componentes: CompleteIcon desde el archivo './CompleteIcon' y DeleteIcon desde el archivo './DeleteIcon'.

function TodoItem(props){ //componente
    return( //elemento
        <li className = 'TodoItem'>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}/>

            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>

            <DeleteIcon 
                onDelete={props.onDelete}/>
        </li>
    );
}

export {TodoItem}