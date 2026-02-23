import './TodoItem.css';

function TodoItem(props) {
     return (
          <li className={`TodoItem ${props.completed ? 'TodoItem--completed' : ''}`}>
               <span className="TodoItem__check">
                    {props.completed ? '✅' : '⬜'}
               </span>
               <p className="TodoItem__text">{props.text}</p>
          </li>
     );
}

export { TodoItem };
