const listToDo = [
  {
    id: 1,
    name: "Hacer curso",
    description:"Terminar el curso de programacion con React",
    completed: false
  },
  {
    id: 2,
    name: "Jugar al futbol",
    description:"Jugar con mis amigos al futbol",
    completed: false
  },
  {
    id: 3,
    name: "Aprender aleman",
    description:"Hacer mis lecciones de aleman en Bussuu",
    completed: false
  },
  {
    id: 4,
    name: "Hacer tarea",
    description:"Terminar la tarea de programacion con React",
    completed: false
  }
];

const TodoItem = () => {
  return (
    <>
      {listToDo.map((item) => (
        <ul className="list" key={item.id}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-check" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l5 5l10 -10"></path>
          </svg>
          <li>{item.name}</li>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-closed" viewBox="0 0 24 24">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
          <div className="list__description inactive">
            <p>{item.description}</p>
          </div>
        </ul>
      ))}
    </>
  );
}

export {TodoItem};