function TodoItems(props) {
  return (
    <li>
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItems };