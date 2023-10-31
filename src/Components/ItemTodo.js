function TodoItem(props) {
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
    }
  ]
  return (
    <>
      <ul>
        {listToDo.map(item => (
          <li style={{listStyle:"none"}} key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export {TodoItem};