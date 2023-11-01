const listToDo = [
  {
    id: 1,
    name: "Hacer curso",
    completed: false
  },
  {
    id: 2,
    name: "Jugar al futbol",
    completed: false
  },
  {
    id: 3,
    name: "Aprender aleman",
    completed: false
  },
  {
    id: 4,
    name: "Hacer tarea",
    completed: false
  }
]

function TodoItem() {
  return (
    <>
      {listToDo.map((item) => (
        <ul key={item.id} style={{listStyle: "none"}}>
          <span>V</span>
          <li>{item.name}</li>
          <span>X</span>
        </ul>
      ))}
    </>
  );
}

export {TodoItem};