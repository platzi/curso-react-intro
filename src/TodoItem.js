function TodoItem(props) {
    return (
      <li>
        <span>[/]</span>
        <p>{props.text}</p>
        <span>x</span>
      </li>
    );
  }

export { TodoItem };