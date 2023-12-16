/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/TodoItem.css';


function TodoItem(props){ //componente
    return( //elemento
        <li>
            <span type='checkbox' className={`icon icon-check ${props.completed && 'icon-check--active'}`}>*</span>
            <p className={`parrafo ${props.completed && 'list-parrafo--tachado'}`}>{props.text}</p>
            <span className={`icon icon-delete`}>X</span>
        </li>
    );
}

export {TodoItem}