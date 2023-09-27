function TodoItem(props) {
    return (
      <li className="list-group-item list-group-item-action list-group-item-dark">
        <span>[/]</span>
        <p>{props.text}</p>
        <span>x</span>
      </li>
    );
  }

export { TodoItem };