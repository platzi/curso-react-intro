function TodoItem(props){
    return(
      <li className="flex">
        <span
         onClick={props.onComplete}
         className={`cursor-pointer font-bold ${props.completed && "text-lime-500" }`}>V {props.completed}</span>
        <p className={`grow text-center ${props.completed && "line-through"}`}>{props.text}</p>
        <span
        onClick={props.onDelete}
        className={`cursor-pointer font-bold text-red-600`}>X</span>
      </li>
    );
  }

  export {TodoItem};