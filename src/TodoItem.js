function TodoItem(props){
    return(
      <li className="flex">
        <span className={`cursor-pointer`}>V {props.completed}</span>
        <p className="grow text-center">{props.text}</p>
        <span className="cursor-pointer">X</span>
      </li>
    );
  }

  export {TodoItem};