function TodoItem(props) {
  return (
    <li>
      <samp>v</samp>
      <p>{props.text}</p>
      <samp>X</samp>
    </li>
  );
}

export { TodoItem };
