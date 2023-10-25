function TodoItem() {
  return (
    <>
      <li style={{ listStyle: "none" }}>
        <span>V</span>
        <p>Hacer el curso</p>
        <span>X</span>
      </li>
      {/* Podemos crear un padre y podemos añadirle un hijo con con {props.childre} */}
      {/* <ul>
            {props.childre}
            {props.childre}
          </ul> */}
    </>
  );
}

export {TodoItem};