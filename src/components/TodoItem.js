
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props){
  return (
    <li className='TodoItem'>
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
        onClick={props.onComplete}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </li>
  );
}

  export { TodoItem };