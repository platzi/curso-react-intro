/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/TodoItem.css';


function TodoItem(props){ //componente
    return( //elemento
        <li className = 'TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}>
                    *
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className={`icon icon-delete`}>X</span>
        </li>
    );
}

export {TodoItem}