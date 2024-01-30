function TodoItem(props){
    return(
      <li className="justify-items-center">
        <span className="text-center">V {props.completed}</span>
        <p className="text-center">{props.text}</p>
        <span className="text-center">X</span>
      </li>
    );
  }

  export {TodoItem};