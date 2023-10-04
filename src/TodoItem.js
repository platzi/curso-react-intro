import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="list-group-item list-group-item-action list-group-item-dark TodoItem">

        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>[/]</span> 

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

        <span className="Icon Icon-delete">x</span>
      </li>
    );
  }

export { TodoItem };
 