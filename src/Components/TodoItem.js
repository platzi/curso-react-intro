import '../Styles/TodoItem.css';

function TodoItem({key, text, completed, onComplete, onDelete}) {
  return(
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        {completed?"✓":"○"}
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >{`✗`}</span>
    </li>
  )
}

export {TodoItem};